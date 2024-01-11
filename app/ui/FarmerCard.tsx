import React from 'react';
// import Link from 'next/link';
import { filterFarmer } from '../composables/data';
import styles from '@/app/styles/FarmerCard.module.css';
import { farmer } from "@/app/composables/data";
import Link from 'next/link';

export default async function FarmerCard(farmerData: any) {
    // console.log('what', farmerData);
    const data = farmerData?.farmerData;

    const socialLinks = (
        <div>
            {data?.facebook && <a href="#"><img src="#" alt="" /><span className="sr-only">facebook</span></a>}
            {data?.instagram && <a href="#"><img src="#" alt="" /><span className="sr-only">instagram</span></a>}
        </div>
    );

    const productCategoryOne = data?.product_one_title && (
        <div className={styles["stat"]}>
            <span className={styles["label"]}>{data?.product_one_title}</span>
        </div>
    );

    const productCategoryTwo = data?.product_two_title && (
        <div className={styles["stat"]}>
            <span className={styles["label"]}>{data?.product_two_title}</span>
        </div>
    );

    const productCategoryThree = data?.product_three_title && (
        <div className={styles["stat"]}>
            <span className={styles["label"]}>{data?.product_three_title}</span>
        </div>
    );

    const address = (
        <div>
            <span>Address</span>
            <p>{data?.address_road}</p>
            <p>{data?.address_city} {data?.address_state}, {data?.address_zip}</p>
        </div>
    );

    return (
        <div className={styles["card"]}>

            <div className={styles["card-body"]}>
                <h2 className={styles["name"]}>{data?.farm_name}</h2>
                <h4 className={styles["job-title"]}>{data?.first_name} {data?.last_name}</h4>
                <div className={styles["bio"]}>
                    {address}
                    <p className={styles['info']}>
                        Phone: {data?.phone}<br />
                        Email: {data?.email}<br />
                        <a href={data?.website}>{data?.website}</a>
                    </p>
                </div>
                <div className={styles["social-accounts"]}>
                    {socialLinks}
                </div>

                <Link href={`/farmer/details/${data?._id}`}><button>Details</button></Link>
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
