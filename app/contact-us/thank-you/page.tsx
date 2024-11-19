import ButtonAuth from "@/ui/buttons/ButtonAuth";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white h-[100vh]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Thank you for contacting us!
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <span className="flex flex-col rounded-md px-3 py-2 text-sm font-medium text-gray-700">
            <Link href="/authentication/login">
              Sign in or<br/>create an account
            </Link>

          </span>
          <span className="flex flex-col">
            <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700">
              Browse<br />our farmers <span aria-hidden="true">→</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
