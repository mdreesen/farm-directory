import React from 'react';
// import Link from 'next/link';
import { filterFarmer } from '../composables/data';
import styles from '@/app/styles/FarmerCard.module.css';
import { farmer } from "@/app/composables/data";

export default async function FarmerCard(farmerData: any) {
    console.log('what', farmerData?.farmerData);
    const data = farmerData?.farmerData;

    const socialLinks = (
        <div>
            {data?.facebook && <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/facebook.svg" alt="" /><span className="sr-only">facebook</span></a>}
            {data?.instagram && <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg" alt="" /><span className="sr-only">instagram</span></a>}
        </div>
    );

    const productCategoryOne = data?.product_one_title && (
        <div className={styles["stat"]}>
            <span className={styles["label"]}>{data?.product_one_title}</span>
            <span className={styles["value"]}>56K</span>
        </div>
    );

    const productCategoryTwo = data?.product_two_title && (
        <div className={styles["stat"]}>
            <span className={styles["label"]}>{data?.product_one_title}</span>
            <span className={styles["value"]}>56K</span>
        </div>
    );

    const productCategoryThree = data?.product_three_title && (
        <div className={styles["stat"]}>
            <span className={styles["label"]}>{data?.product_one_title}</span>
            <span className={styles["value"]}>56K</span>
        </div>
    );

    return (
        <div className={styles["card"]}>

            <div className={styles["card-body"]}>
                <h2 className={styles["name"]}>{data?.farm_name}</h2>
                <h4 className={styles["job-title"]}>{data?.first_name} {data?.last_name}</h4>
                <div className={styles["bio"]}>
                    <p>
                        {data?.address_road} {data?.address_city} {data?.address_state}, {data?.address_zip}
                    </p>
                    <p>
                        {data?.phone}
                        {data?.email}
                        {data?.website}
                    </p>
                </div>
                <div className={styles["social-accounts"]}>
                    {socialLinks}
                </div>
            </div>

            <div className={styles["card-footer"]}>
                <h3>Products</h3>
                <div className={styles["stats"]}>
                    {productCategoryOne}
                    {productCategoryTwo}
                    {productCategoryThree}
                </div>
            </div>
        </div>
    );
}
