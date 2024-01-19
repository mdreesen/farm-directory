import { cookies } from 'next/headers';

export async function isLoggedIn() {
    const cookiesList = cookies()
    return cookiesList.has(`${process.env.COOKIE_KEY}`);
};