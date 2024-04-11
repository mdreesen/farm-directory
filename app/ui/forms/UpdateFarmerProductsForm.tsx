"use client"
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import styles from '@/app/styles/Form.module.css';
import ToastApproved from "@/app/ui/toast/ToastApproved";

// Importing Categories
import { Categories } from '@/app/ui/productCategories/Categories';
import { CategoryShow } from '@/app/ui/productCategories/CategoryShow';
import { CategoryAvailable } from '@/app/ui/productCategories/CategoryAvailable';
import { FormValidation } from "@/app/ui/forms/FormValidation";

export function UpdateFarmerProductsForm(data: any) {
    const farmerData = data?.data;

    const startData = {
        _id: farmerData?._id,
        product_title: farmerData?.product_title,
        product_description: farmerData?.product_description,
        product_available: farmerData?.product_available,
        product_show: farmerData?.product_show,
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

        const res = await fetch(`/api/Products/${farmerData?._id}/product`, {
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

    const productOneInfo = (
        <div className={styles['product']}>
            <h2>Product Information</h2>
            <label>Product Title</label>
            <select
                name="product_title"
                value={formData?.product_title?.trim()}
                onChange={handleChange}
                required
            >
                <Categories />
            </select>
            <FormValidation data={formData?.product_title} />

            <label>Product Description</label>
            <textarea
                id="product_description"
                name="product_description"
                rows={5}
                onChange={handleChange}
                value={formData?.product_description}
            />

            <label>Do you want your product to show?</label>
            <select
                name="product_show"
                value={formData?.product_show}
                onChange={handleChange}
            >
                <CategoryShow />
            </select>

            <label>Is your product available now?</label>
            <select
                name="product_available"
                value={formData?.product_available}
                onChange={handleChange}
            >
                <CategoryAvailable />
            </select>
        </div>
    );

    return (
        <>
            <form className={styles['container']} method="post" onSubmit={handleSubmit}>
                {productOneInfo}
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