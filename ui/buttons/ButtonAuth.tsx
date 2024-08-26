"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ButtonAuth() {
  const { status } = useSession();
  const router = useRouter();
  console.log(useSession())

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });

          }}
        >
          Sign Out
        </button>
      )
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">Loading...</span>
      )
    } else {
      return (
        <Link
          href="/authentication/login"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Sign In
        </Link>
      )
    }
  }
  return showSession();
}