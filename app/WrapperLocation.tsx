'use server';
import dynamic from 'next/dynamic';
import { Location } from '@/app/lib/locationServices/Location';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

   await Location();

    return (
        <>
            {children}
        </>
    );
};
