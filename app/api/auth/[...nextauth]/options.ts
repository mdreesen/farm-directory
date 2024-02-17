import NextAuth, { NextAuthOptions } from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/app/(models)/User";
import connect from "@/app/lib/db";
import { cookies } from "next/headers";


export interface IUser {
    _id?: string;
    email: string;
    isAdmin: boolean;
    isFarmer: boolean,
    createdAt: string,
    updatedAt: string
  }

export const authOptions: NextAuthOptions = {
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
        // Passing n custom user attributes to the token
        if (user) {
          return {
            ...token,
            id: user?.id,
            isAdmin: user?.isAdmin,
            isFarmer: user?.isFarmer
          }
        }
        return token
      },
      session: async ({ session, token, user }: any) => {
          // Pass in custom attributes to the session
          // console.log(token)

          return {
            ...session,
            user: {
              ...session?.user,
              id: token.id,
              isFarmer: token?.isFarmer,
              isAdmin: token?.isAdmin
            }
          };
      },
    }
  };