'use client'
import { useUser } from '@auth0/nextjs-auth0/client';

export function authUser() {
    const { user, error, isLoading } = useUser();
    return {
        user,
        error,
        isLoading
    }
};

export async function isUser() {
    const { user } = useUser();

    async function mongoUser() {

        try {
            const res = await fetch(`/api/Users`);
            return res?.json()
        }
        catch (error) {
            console.log(error)
            return error
        }
    };

    const mongoData = await mongoUser();

    const mongoUserData = mongoData?.user?.filter((item: any) => item?.email === user?.email);
    const findUserData = mongoUserData.find((user: any) => user)

    return findUserData
};
