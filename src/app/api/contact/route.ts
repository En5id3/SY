import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, desc } = body;

    if (!name || !email || !desc) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, desc).' },
        { status: 400 }
      );
    }

    const emailSubject = `Project Inquiry: ${name} - ${service}`;
    const emailText = `Hello SOCHYEAH Team,

A new project inquiry has been submitted through the website:

Name: ${name}
Company: ${company || 'N/A'}
Work Email: ${email}
Phone / WhatsApp: ${phone || 'N/A'}
Target Domain: ${service}

Project Requirements & Context:
${desc}

Sent from https://sochyeah.com/contact`;

    // 1. If SMTP / Gmail credentials are configured in .env.local, send directly via SMTP
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      await transporter.sendMail({
        from: `"SOCHYEAH Inquiries" <${smtpUser}>`,
        to: 'soch9yeah@gmail.com',
        replyTo: email,
        subject: emailSubject,
        text: emailText
      });

      return NextResponse.json({
        success: true,
        sentDirectly: true,
        message: 'Inquiry dispatched directly to soch9yeah@gmail.com.'
      });
    }

    // 2. Return pre-formatted mail parameters for seamless client compose
    return NextResponse.json({
      success: true,
      sentDirectly: false,
      message: 'Inquiry formatted for soch9yeah@gmail.com.'
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry.' },
      { status: 500 }
    );
  }
}
