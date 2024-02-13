import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/app/(models)/User";
import connect from "@/app/lib/db";

export interface IUser {
  _id?: string;
  email: string;
  isAdmin: boolean;
  isFarmer: boolean,
  createdAt: string,
  updatedAt: string
}

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt: async ({ token, user, session }: any) => {
      user && (token.user = user)
      return { ...token, ...session?.user }
    },
    session: async ({ session, token, user }: any) => {
      const userData =  {...session.user, ...token.user}
      if (session.user !== undefined && session?.user?.user !== undefined) {
        return userData
      }
    },
  }
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };