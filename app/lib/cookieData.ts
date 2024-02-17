'use client'
import { useSession } from "next-auth/react";


export function LoggedInUserData() {
    const { data: session, status } = useSession();
    return session
}
