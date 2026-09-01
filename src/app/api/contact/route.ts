import { NextRequest, NextResponse } from 'next/server';

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

    const payload = {
      _subject: `New SOCHYEAH Inquiry: ${name} - ${service}`,
      _replyto: email,
      Name: name,
      Company: company || 'N/A',
      Email: email,
      'Phone / WhatsApp': phone || 'N/A',
      'Target Domain': service,
      'Project Requirements': desc,
      _template: 'table',
      _captcha: 'false'
    };

    // Forward email via FormSubmit delivery service to soch9yeah@gmail.com
    const emailRes = await fetch('https://formsubmit.co/ajax/soch9yeah@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        Origin: 'https://sochyeah.com',
        Referer: 'https://sochyeah.com/contact'
      },
      body: JSON.stringify(payload)
    });

    const responseData = await emailRes.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: 'Inquiry dispatched to soch9yeah@gmail.com.',
      details: responseData
    });
  } catch (error) {
    console.error('Error dispatching contact email:', error);
    return NextResponse.json(
      { error: 'Failed to dispatch email.' },
      { status: 500 }
    );
  }
}
