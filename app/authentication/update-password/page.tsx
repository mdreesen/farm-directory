import React from 'react';
import UpdatePassword from '@/app/ui/forms/authentication/UpdatePassword';
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
        <UpdatePassword/>
      </div>
    </>
  );
}
