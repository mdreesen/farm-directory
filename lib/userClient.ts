import { useSession } from "next-auth/react";

export const userClient = () => {
    const { data, status } = useSession();
    return { ...data }
}