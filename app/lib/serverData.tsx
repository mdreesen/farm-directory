'use server';

import { cookies } from 'next/headers'


export async function deleteToken() {
    return cookies().delete(`${process.env.COOKIE_KEY}`);
};
