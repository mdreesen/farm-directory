"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/styles/Form.module.css';
import ToastApproved from "@/app/ui/toast/ToastApproved";

// Importing Categories
import { StatePicker } from "@/app/ui/statePicker";
import { FormValidation, SocialLinkValidation } from "@/app/ui/validations/FormValidation";


export const UpdateFarmerForm = (data: any) => {
    const farmerData = data?.data;

    const startData = {
        first_name: farmerData?.first_name,
        last_name: farmerData?.last_name,
        farm_name: farmerData?.farm_name,
        address_road: farmerData?.address_road,
        address_city: farmerData?.address_city,
        address_state: farmerData?.address_state,
        address_zip: farmerData?.address_zip,
        phone: farmerData?.phone,
        email: farmerData?.email,
        website: farmerData?.website,
        facebook: farmerData?.facebook,
        instagram: farmerData?.instagram
    };

    const [formData, setFormData] = useState(startData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [enableToast, setEnableToast] = useState<boolean>(false);

    const router = useRouter();

    const handleSocialURLS = (data: any) => {

        if(!data) return '';

        return data?.includes('https') ? data?.toLowerCase().trim() : 'https://' + data?.toLowerCase().trim()
    }

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

        const res = await fetch(`/api/Farmers/${farmerData?._id}`, {
            method: "PUT",
            cache: 'no-store',
            body: JSON.stringify({ formData }),
        });


        if (!res.ok) throw new Error("Failed to update Farmer");

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


            <label>Farm Name</label>
            <input
                id="farm_name"
                name="farm_name"
                type="text"
                onChange={handleChange}
                value={formData?.farm_name}
            />

            <label>Road</label>
            <input
                id="address_road"
                name="address_road"
                type="text"
                onChange={handleChange}
                value={formData?.address_road}
                required
            />
            <FormValidation data={formData?.address_road} />


            <label>City</label>
            <input
                id="address_city"
                name="address_city"
                type="text"
                onChange={handleChange}
                value={formData?.address_city}
                required
            />
            <FormValidation data={formData?.address_city} />

            <label>State</label>
            <select
                name="address_state"
                value={formData?.address_state?.trim()}
                onChange={handleChange}
                required
            >
                <StatePicker />
            </select>
            <FormValidation data={formData?.address_state} />

            <label>Zip</label>
            <input
                id="address_zip"
                name="address_zip"
                type="text"
                onChange={handleChange}
                value={formData?.address_zip}
                required
            />
            <FormValidation data={formData?.address_zip} />


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

    const socialInfo = (
        <div className={styles['basicInfo']}>

            <h2>Social Information</h2>

            <label>Website Link</label>
            <input
                id="website"
                name="website"
                type="text"
                onChange={handleChange}
                placeholder={'https://yourwebsite.com'}
                value={handleSocialURLS(formData?.website)}
            />
            <SocialLinkValidation data={formData?.website} />

            <label>Facebook Link</label>
            <input
                id="facebook"
                name="facebook"
                type="text"
                onChange={handleChange}
                placeholder={'https://yourfacebook.com'}
                value={handleSocialURLS(formData?.facebook)}
            />
            <SocialLinkValidation data={formData?.facebook} />

            <label>Instagram Link</label>
            <input
                id="instagram"
                name="instagram"
                type="text"
                onChange={handleChange}
                placeholder={'https://yourinstagram.com'}
                value={handleSocialURLS(formData?.instagram)}
            />
            <SocialLinkValidation data={formData?.instagram} />
        </div>
    );

    return (
        <>
            <form className={styles['container']} method="post" onSubmit={handleSubmit}>
                {basicInfo}
                {socialInfo}
                {isLoading ? <span className="text-[#7A3A30] flex justify-center">Submitted, Now Loading...</span> : (
                    <input
                        className={styles['submitBtn']}
                        type="submit"
                        value="Update"
                    />
                )}
            </form>
            {enableToast && <ToastApproved />}
        </>
    )
};