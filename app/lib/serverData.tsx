'use server';
import { cookies } from 'next/headers'
  
export async function deleteToken() {
    const deleteCookie = cookies().delete(`${process.env.COOKIE_KEY}`);

    return deleteCookie
  }
