'use server';
import Farmer from '@/app/(models)/Farmer';
import User from '@/app/(models)/User';
import { unstable_noStore as noStore } from 'next/cache';

export async function authenticatedUser() {
    noStore();

    const authenticated = await fetch("/api/Authentication/authenticated", {
        method: "GET",
        cache: 'no-store',
        headers: {
            "Content-Type": "application/json"
        },
    });

    const isAuthenticated = await authenticated.json();
    console.log(isAuthenticated)
    return isAuthenticated

};