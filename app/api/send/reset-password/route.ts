import User from '@/app/(models)/User';

import { TemplateResetPassword } from '@/app/ui/email/TemplateResetPassword';
import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from 'next/server';

import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const body = await req.json();

    const { email } = body.formData;

    // Find existing user
    const user = await User.findOne({ email }).select('_id'); // Find user

    const resetPasswordToken = crypto.randomBytes(32).toString("base64url"); // Make token from node's crypto
    const today = new Date(); // Today's date
    const expirationDate = new Date(today.setDate(today.getDate() + 1)); // This expires after 24 hours

    await User.findByIdAndUpdate(user.id, {
      resetPasswordToken: resetPasswordToken,
      resetPasswordTokenExpirationDate: expirationDate
  });

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Reset your password',
      react: TemplateResetPassword({ email, resetPasswordToken }) as React.ReactElement,
    });

    return NextResponse.json({ message: "User updated, need to reset password" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 })

  }
}