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

    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || 'soch9yeah@gmail.com';
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpPass) {
      // Vercel Serverless optimized SMTP configuration using direct TLS on Port 465
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
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

    console.warn('GMAIL_APP_PASSWORD not set in environment variables on Vercel.');
    return NextResponse.json(
      { 
        error: 'Email service configuration pending on server. Please add GMAIL_APP_PASSWORD to Vercel Environment Variables.' 
      },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error('Error in /api/contact:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to process inquiry.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
