"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from '@/app/styles/authentication/Auth.module.css';
import { useGeolocation } from "@uidotdev/usehooks";
import { radarReverseCoordinates } from "@/app/lib/locationServices/radarApi";

export function FarmerAuthenticationForm() {
    const router = useRouter();

    const startData = {
        first_name: "",
        email: "",
        password: "",
        validate_password: "",
        address_zip: "",
        isFarmer: true,
        agree_to_legal: true,
        agree_to_privacy_policy: true
    };

    const [formData, setFormData] = useState(startData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setError] = useState<string>("");
    const [isChecked, setChecked] = useState();

    const locationState = useGeolocation();
    const loading = locationState?.loading;

    const handleChange = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        const { checked } = e.target;
        setChecked(checked);

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        if (!loading) {
            const latitude = locationState?.latitude?.toString() ?? '';
            const longitude = locationState?.longitude?.toString() ?? '';
            const radarServices = await radarReverseCoordinates(latitude, longitude);

            const address = radarServices?.addresses?.find((item: object) => item);
            
            const findingExistingUser = await fetch("/api/Authentication/existing", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ formData })
            });

            const existingUser = await findingExistingUser.json();

            if (existingUser?.user) {
                setIsLoading(false);
                setError("User already exists");
                throw new Error("User already exists");
            };


            if (formData?.validate_password !== formData?.password) {
                setIsLoading(false);
                setError("Thought you knew...passwords need to match");
                throw new Error("Passwords need to match");
            };

            const res = await fetch("/api/Farmers", {
                method: "POST",
                cache: 'no-store',
                body: JSON.stringify({ formData, ...address }),
            });


            const signUpUser = await fetch("/api/Authentication/signup", {
                method: "POST",
                cache: 'no-store',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ formData, ...address }),
            });

            // Sign up initiate here
            res;
            signUpUser;

            router.refresh();
            router.push("/authentication/login");
        }
    };

    return (
        <div className={styles['container']}>
            <div className="flex flex-col items-center justify-start mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-[#F8F8FF] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl" dangerouslySetInnerHTML={{ __html: "I'm a farm/farm service provider" }} />

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Your First Name</label>
                                <input type="text" name="first_name" id="first_name" value={formData?.first_name.trim()} onChange={handleChange} className="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="First Name" required />
                            </div>
                            <div>
                                <label htmlFor="address_zip" className="block mb-2 text-sm font-medium text-gray-900">Your Zip Code</label>
                                <input type="text" name="address_zip" id="address_zip" value={formData?.address_zip.trim().toLowerCase()} onChange={handleChange} className="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Zip Code" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" value={formData?.email.trim().toLowerCase()} onChange={handleChange} className="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@domain.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" value={formData?.password.trim()} onChange={handleChange} placeholder="Enter Password" className="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Validate password</label>
                                <input type="password" name="validate_password" id="validate_password" value={formData?.validate_password.trim()} onChange={handleChange} placeholder="You know what to do" className="text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>

                            <div className="flex items-center mb-4">
                                <input id="agree_to_legal" type="checkbox" name="agree_to_legal" value={isChecked && formData?.agree_to_legal === true} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" required />
                                <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to </span>
                                <Link className="text-sm ms-1" href='/terms-conditions'>Terms & Conditions</Link>
                            </div>

                            <div className="flex items-center mb-4">
                                <input id="agree_to_privacy_policy" type="checkbox" name="agree_to_privacy_policy" value={isChecked && formData?.agree_to_privacy_policy === true} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" required />
                                <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to </span>
                                <a className="text-sm ms-1" href="https://app.termly.io/document/privacy-policy/f960c6b4-e8b6-4a86-894a-0144bbe3b639">Privacy Policy</a>
                            </div>

                            {isLoading ? <span className="text-[#7A3A30] flex justify-center">Making user...</span> : (
                                <button type="submit" className="w-full font-medium text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                            )}

                            {isError && <span style={{ color: 'red' }}>{isError}</span>}
                            <p className="text-sm font-light text-gray-500">
                                Have an account? <Link href="/authentication/login" className="font-medium text-primary-600 hover:underline">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};