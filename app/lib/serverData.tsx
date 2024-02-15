'use server';
import { cookies } from 'next/headers'


// export async function deleteToken() {
//     return cookies().delete(`${process.env.COOKIE_KEY}`);
// };
  
export async function deleteToken() {
    // const data = cookiesList.get(`${process.env.COOKIE_KEY}`);
    const deleteCookie = cookies().delete(`${process.env.COOKIE_KEY}`);

    return deleteCookie
  }
