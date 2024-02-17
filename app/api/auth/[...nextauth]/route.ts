import NextAuth from "next-auth";
import { authOptions } from './options';

export interface IUser {
  _id?: string;
  email: string;
  isAdmin: boolean;
  isFarmer: boolean,
  createdAt: string,
  updatedAt: string
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };