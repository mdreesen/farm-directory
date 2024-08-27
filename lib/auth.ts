import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import type { NextAuthOptions, DefaultSession, DefaultUser } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// import { type DefaultSession, type DefaultUser } from "next-auth";
  import { type DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        email: any;
        id: string;
        name: string;
        _id: string;
        password: string;
        isFarmer: boolean,
        favoriteFarmers: [],
        agree_to_legal: boolean,
        agree_to_privacy_policy: boolean,
        createdAt: string,
        updatedAt: string,
        __v: number,
        resetPasswordToken: string,
        resetPasswordTokenExpirationDate: Date
      };

    }
    interface User extends DefaultUser {
      username: string; // the user will now have the property
      _id: string;
      email: string;
      password: string;
      isFarmer: boolean,
      favoriteFarmers: [],
      agree_to_legal: boolean,
      agree_to_privacy_policy: boolean,
      createdAt: string,
      updatedAt: string,
      __v: number,
      resetPasswordToken: string,
      resetPasswordTokenExpirationDate: Date
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
      id: string;
      username: string; // also my jwt will have the property, I can access this property within the JWT using the getToken() helper
      _id: string;
      email: string;
      password: string;
      isFarmer: boolean,
      favoriteFarmers: [],
      agree_to_legal: boolean,
      agree_to_privacy_policy: boolean,
      createdAt: string,
      updatedAt: string,
      __v: number,
      resetPasswordToken: string,
      resetPasswordTokenExpirationDate: Date
    }
  }

export const authOptions: NextAuthOptions = {
    providers: [
        credentials({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();
                const user = await User.findOne({
                    email: credentials?.email,
                }).select("+password");

                if (!user) throw new Error("Wrong Email");
                const passwordMatch = await bcrypt.compare(
                    credentials!.password,
                    user.password
                );

                if (!passwordMatch) throw new Error("Wrong Password");
                return user;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session }) {
            const userData = await User.findOne({ email: session.user?.email });
            return {
                ...session,
                user: {
                    ...userData._doc
                }
            };
        },
        async jwt({ token }) {
            return token
        }
    },
};