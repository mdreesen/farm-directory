"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/styles/Form.module.css';
import ToastApprovedUserUpdated from "@/app/ui/toast/ToastApprovedUserUpdated";

// Importing Categories
import { StatePicker } from "@/app/ui/statePicker";
import { FormValidation } from "@/app/ui/validations/FormValidation";


export const UpdateUserForm = (data: any) => {
    const userData = data?.data;
    console.log(userData)

    const startData = {
        first_name: userData?.first_name,
        last_name: userData?.last_name,
        email: userData?.email,
        phone: userData?.phone,
        houseNumber: userData?.houseNumber,
        street: userData?.street,
        city: userData?.city,
        state: userData?.state,
        postalCode: userData?.postalCode,
    };

    const [formData, setFormData] = useState(startData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [enableToast, setEnableToast] = useState<boolean>(false);

    const router = useRouter();

    const handleChange = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)

        const res = await fetch(`/api/Users/${userData?._id}`, {
            method: "PUT",
            cache: 'no-store',
            body: JSON.stringify({ formData }),
        });


        if (!res.ok) throw new Error("Failed to update User");

        setEnableToast(true);
        setIsLoading(false);

        setTimeout(() => {
            setEnableToast(false);
        }, 6000);

        router.refresh();
    };

    const basicInfo = (
        <div className={styles['basicInfo']}>
            <h2>Basic Information</h2>
            <label>First Name</label>
            <input
                id="first_name"
                name="first_name"
                type="text"
                onChange={handleChange}
                value={formData?.first_name}
            />
            <FormValidation data={formData?.first_name} />

            <label>Last Name</label>
            <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={handleChange}
                value={formData?.last_name}
                required
            />
            <FormValidation data={formData?.last_name} />

            <label>House Number</label>
            <input
                id="houseNumber"
                name="houseNumber"
                type="text"
                onChange={handleChange}
                value={formData?.houseNumber}
                required
            />
            <FormValidation data={formData?.houseNumber} />

            <label>Street</label>
            <input
                id="street"
                name="street"
                type="text"
                onChange={handleChange}
                value={formData?.street}
                required
            />
            <FormValidation data={formData?.street} />


            <label>City</label>
            <input
                id="city"
                name="city"
                type="text"
                onChange={handleChange}
                value={formData?.city}
                required
            />
            <FormValidation data={formData?.city} />

            <label>State</label>
            <select
                name="address_state"
                value={formData?.state?.trim()}
                onChange={handleChange}
                required
            >
                <StatePicker />
            </select>
            <FormValidation data={formData?.state} />

            <label>Zip Code</label>
            <input
                id="postalCode"
                name="postalCode"
                type="text"
                onChange={handleChange}
                value={formData?.postalCode}
                required
            />
            <FormValidation data={formData?.postalCode} />


            <label>Phone</label>
            <input
                id="phone"
                name="phone"
                type="text"
                onChange={handleChange}
                value={formData?.phone?.trim()}
                required
            />
            <FormValidation data={formData?.phone} />


            <label>Email</label>
            <input
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                value={formData?.email?.trim()}
                required
            />
            <FormValidation data={formData?.email} />

        </div>
    );

    return (
        <>
            <form className={styles['container']} method="post" onSubmit={handleSubmit}>
                {basicInfo}
                {isLoading ? <span className="text-[#7A3A30] flex justify-center">Submitted, Now Loading...</span> : (
                    <input
                        className={styles['submitBtn']}
                        type="submit"
                        value="Update"
                    />
                )}
            </form>
            {enableToast && <ToastApprovedUserUpdated />}
        </>
    )
};