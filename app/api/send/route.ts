import { EmailTemplate } from '@/app/ui/email/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const body = await req.json();
    // console.log('Tis be body here', body)
    const { data, error } = await resend.emails.send({
      from: body.from,
      to: body.to,
      subject: body.subject,
      react: EmailTemplate({ firstName: body.to }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 })
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 })

  }
}