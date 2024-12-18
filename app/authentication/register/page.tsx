"use client";
import { useRef, useState } from "react";
import { Field, Label, Switch } from '@headlessui/react'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import { verification } from "@/actions/verification";

export default function Page() {
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    const [enabled, setEnabled] = useState(false);

    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        const r = await register({
            email: formData.get("email"),
            password: formData.get("password"),
            confirm_password: formData.get("confirm_password"),
            privacy_policy: formData.get('privacy_policy'),
            name: formData.get("name"),
            isFarmer: enabled ? 'true' : 'false'
        });
        ref.current?.reset();
        if (r?.error) {
            setError(r.error);
            return;
        }
        if (enabled) {
            const res = await verification({
                email: formData.get("email"),
            });
            router.push("/authentication/verification");
        }
        else {
            return router.push("/authentication/login");
        }
    };

    const SignupToggle = () => (
        <Field className="flex items-center">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-[#7A3A30]"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
            </Switch>
            <Label as="span" className="ml-3 text-sm">
                <span className="font-medium text-gray-900">{enabled ? "I'm a farm/farm service provider" : "I'm looking for farm products"}</span>{' '}
            </Label>
        </Field>
    );

    return (
        <div className="h-[100vh]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Create a new account
                    </h2>
                    <SignupToggle />
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" ref={ref} action={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-black">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex h-6 items-center">
                            <input
                                id="privacy_policy"
                                name="privacy_policy"
                                required
                                type="checkbox"
                                aria-describedby="privacy-policy"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-black px-2">
                                <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=f960c6b4-e8b6-4a86-894a-0144bbe3b639">Agree to Privacy Policy</a>
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#7A3A30] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#af8882] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Create Account
                            </button>

                            {error && <div className="">{error}</div>}
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-400">
                        <Link href="/authentication/login" className="font-semibold leading-6 text-[#7A3A30] hover:text-[#af8882]">
                            Already have an account?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
