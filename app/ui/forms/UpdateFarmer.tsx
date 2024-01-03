"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from '@/app/styles/Form.module.css';
import {authUser} from '@/app/composables/authUser';

export const UpdateFarmer = (params: any) => {
    console.log(params)

    const startData = {
        first_name: "",
        last_name: "",
        farm_name: "",
        address_road: "",
        address_city: "",
        address_state: "",
        address_zip: "",
        phone: "",
        email: "",
        website: "",
        facebook: "",
        instagram: ""
    };

    const [formData, setFormData] = useState(startData);

    // const router = useRouter();
    const handleChange = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (id: any) => {

        const res = await fetch(`/api/Users/${id}`, {
            method: "UPDATE",
            cache: 'no-store',
            body: JSON.stringify({ formData }),
        });

        if (!res.ok) throw new Error("Failed to update Farmer");
    }

    return <div>
        <form className={styles['container']} method="post" onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
                id="first_name"
                name="first_name"
                type="text"
                onChange={handleChange}
                value={formData?.first_name}
            />

            <label>Last Name</label>
            <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={handleChange}
                value={formData?.last_name}
            />

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
            />

            <label>City</label>
            <input
                id="address_city"
                name="address_city"
                type="text"
                onChange={handleChange}
                value={formData?.address_city}
            />

            <label>State</label>
            <input
                id="address_state"
                name="address_state"
                type="text"
                onChange={handleChange}
                value={formData?.address_state}
            />

            <label>Zip</label>
            <input
                id="address_zip"
                name="address_zip"
                type="text"
                onChange={handleChange}
                value={formData?.address_zip}
            />

            <label>Phone</label>
            <input
                id="phone"
                name="phone"
                type="text"
                onChange={handleChange}
                value={formData?.phone}
            />

            <label>Email</label>
            <input
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                value={formData?.email}
            />

            <label>Website</label>
            <input
                id="website"
                name="website"
                type="text"
                onChange={handleChange}
                value={formData?.website}
            />

            <label>Facebook</label>
            <input
                id="facebook"
                name="facebook"
                type="text"
                onChange={handleChange}
                value={formData?.facebook}
            />

            <label>Instagram</label>
            <input
                id="instagram"
                name="instagram"
                type="text"
                onChange={handleChange}
                value={formData?.instagram}
            />

            <input type="submit" value="Create Farmer" />
        </form>
    </div>
};