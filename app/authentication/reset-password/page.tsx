import React from 'react';
import ResetPassword from '@/app/ui/forms/authentication/ResetPassword';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}


export default function Page(
  {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }
) {
  const query = searchParams?.query;

  return (
    <>
      <div>
        <ResetPassword/>
      </div>
    </>
  );
}
