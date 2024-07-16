"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import WrapperAuthentication from '@/app/wrappers/WrapperAuthentication';
import ToastApprovedLogin from "@/app/ui/toast/ToastApprovedLogin";
import ButtonResetEmail from "../../buttons/ButtonResetEmail";


export default function ResetPassword() {
    const router = useRouter();

    const startData = {
        password: "",

    };

    const [formData, setFormData] = useState(startData);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setError] = useState<string>("");
    const [enableToast, setEnableToast] = useState<boolean>(false);

    const handleChange = (e: any) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await fetch("/api/send/update-password", {
            method: "POST",
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ formData }),
        });

        if (!res.ok) {
            setIsLoading(false);
            setError("Try again...finding the developer who made this...");
            throw new Error("Failed to login user");
        };

        setEnableToast(true);
        router.refresh();
        router.push('/');

        setTimeout(() => {
            setEnableToast(false);
        }, 6000);

        setIsLoading(false);

        router.refresh();
    };

    const content = isLoading ? (
        <WrapperAuthentication />
    ) : (
        <div className="w-full bg-[#F8F8FF] rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Update your password
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input type="password" name="password" id="password" value={formData?.password} onChange={handleChange} className="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@domain.com" required />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Verify password</label>
                        <input type="password" name="password" id="password" value={formData?.password} onChange={handleChange} className="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@domain.com" required />
                    </div>

                    {isLoading ? <span className="text-[#7A3A30] flex justify-center">Signing in...</span> : (
                        <ButtonResetEmail />
                    )}

                    {isError && <span style={{ color: 'red' }}>{isError}</span>}
                    <p className="text-sm font-light text-gray-500">
                        Don’t have an account yet? <Link href="/authentication/signup" className="font-medium text-primary-600 hover:underline">Sign up</Link>
                    </p>

                </form>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col items-center justify-start mx-auto md:h-screen lg:py-0">
            {content}
            {enableToast && <ToastApprovedLogin />}
        </div>
    )

}