'use client'
import { useUser } from '@auth0/nextjs-auth0/client';


export const authUser = async () => {
    const { user } = useUser();
    return user
}
