import { getSession } from '@auth0/nextjs-auth0';

export const userServer = async () => {
    const { user } = await getSession() ?? {};
    return { user }
}