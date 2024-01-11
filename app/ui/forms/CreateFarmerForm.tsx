"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from '@/app/styles/Form.module.css';

// Importing Categories
import { Categories } from '@/app/ui/productCategories/Categories';
import { CategoryFeedType } from '@/app/ui/productCategories/CategoryFeedType'


export const CreateFarmerForm = () => {

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
        instagram: "",
        product_one_title: "",
        product_one_description: "",
        product_one_feed: "",
        product_one_available: true,
        product_one_show: true,
        product_two_title: "",
        product_two_description: "",
        product_two_feed: "",
        product_two_available: true,
        product_two_show: true,
        product_three_title: "",
        product_three_description: "",
        product_three_feed: "",
        product_three_available: true,
        product_three_show: true
    };

    const [formData, setFormData] = useState(startData);

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
        const res = await fetch("/api/Farmers", {
            method: "POST",
            cache: 'no-store',
            body: JSON.stringify({ formData }),
        });

        if (!res.ok) throw new Error("Failed to update Farmer");
        router.refresh();
        router.push("/create-farmer/created-farmer");
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
        </div>
    );

    const productOneFeed = formData?.product_one_title === 'Beef' && (
        <>
            <label>Product 1 Feed Type</label>
            <select
                name="product_one_feed"
                value={formData?.product_one_feed}
                onChange={handleChange}
            >
                <CategoryFeedType />
            </select>
        </>
    );

    const productTwoFeed = formData?.product_two_title === 'Beef' && (
        <>
            <label>Product 2 Feed Type</label>
            <select
                name="product_two_feed"
                value={formData?.product_two_feed}
                onChange={handleChange}
            >
                <CategoryFeedType />
            </select>
        </>
    );

    const productThreeFeed = formData?.product_three_title === 'Beef' && (
        <>
            <label>Product 3 Feed Type</label>
            <select
                name="product_three_feed"
                value={formData?.product_three_feed}
                onChange={handleChange}
            >
                <CategoryFeedType />
            </select>
        </>
    );

    const productOneInfo = (
        <div className={styles['product']}>
            <h2>Product One Information</h2>
            <label>Product 1</label>
            <select
                name="product_one_title"
                value={formData?.product_one_title}
                onChange={handleChange}
            >
                <Categories />
            </select>

            <label>Product 1 Description</label>
            <textarea
                id="product_one_description"
                name="product_one_description"
                rows={5}
                onChange={handleChange}
                value={formData?.product_one_description}
            />

            {productOneFeed}
        </div>
    );

    const productTwoInfo = (
        <div className={styles['product']}>
            <h2>Product Two Information</h2>
            <label>Product 2</label>
            <select
                name="product_two_title"
                value={formData?.product_two_title}
                onChange={handleChange}
            >
                <Categories />
            </select>

            <label>Product 2 Description</label>
            <textarea
                id="product_two_description"
                name="product_two_description"
                rows={5}
                onChange={handleChange}
                value={formData?.product_two_description}
            />

            {productTwoFeed}
        </div>
    );

    const productThreeInfo = (
        <div className={styles['product']}>
            <h2>Product Three Information</h2>
            <label>Product 3</label>
            <select
                name="product_three_title"
                value={formData?.product_three_title}
                onChange={handleChange}
            >
                <Categories />
            </select>

            <label>Product 3 Description</label>
            <textarea
                id="product_three_description"
                name="product_three_description"
                rows={5}
                onChange={handleChange}
                value={formData?.product_three_description}
            />

            {productThreeFeed}

        </div>
    );

    return (
        <div>
            <form className={styles['container']} method="post" onSubmit={handleSubmit}>
                {basicInfo}
                {productOneInfo}
                {productTwoInfo}
                {productThreeInfo}
                <input type="submit" value="Create Farmer" />
            </form>
        </div>
    )
};