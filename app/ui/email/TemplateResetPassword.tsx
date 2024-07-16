import * as React from 'react';

interface TemplateResetPassword {
  email: string;
  resetPasswordToken: string
}

const env = process.env.NODE_ENV === 'development' ? `http://localhost:3000/authentication/update-password` : `https://thefarmdirectory.com/authentication/update-password`;

export const TemplateResetPassword: React.FC<Readonly<TemplateResetPassword>> = ({
  email,
  resetPasswordToken
}) => (
  <div>
    <h1>Reset password for {email}</h1>
    <p>To reset your password, click on this link and follow the instructions.</p>
    <a href={`${env}?token=${resetPasswordToken}`}>Click here to reset password</a>
  </div>
);