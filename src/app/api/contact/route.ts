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

    console.log(`[New Contact Form Inquiry for soch9yeah@gmail.com]:`, {
      name,
      company: company || 'N/A',
      email,
      phone: phone || 'N/A',
      service,
      desc,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Email notification prepared for soch9yeah@gmail.com.'
    });
  } catch (error) {
    console.error('Error processing contact inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry.' },
      { status: 500 }
    );
  }
}
