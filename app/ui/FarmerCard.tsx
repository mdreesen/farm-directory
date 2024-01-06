import React from 'react';
// import Link from 'next/link';
import { filterFarmer } from '../composables/data';
import styles from '@/app/styles/FarmerCard.module.css';

export default async function FarmerCard(farmerData: any) {
    console.log('what', farmerData);

    const socialLinks = (
        <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg" alt="" /><span className="sr-only">Dribbble</span></a>
    );

    const productCategory = (
        <div className={styles["stat"]}>
            <span className={styles["label"]}>Following</span>
            <span className={styles["value"]}>56K</span>
        </div>
    );

    return (
        <div className={styles["card"]}>

            <div className={styles["card-body"]}>
                <h2 className={styles["name"]}>John Smith</h2>
                <h4 className={styles["job-title"]}>Product Designer</h4>
                <div className={styles["bio"]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, aperiam.</div>
                <div className={styles["social-accounts"]}>
                    {socialLinks}
                </div>
            </div>

            <div className={styles["card-footer"]}>
                <h3>Products</h3>
                <div className={styles["stats"]}>
                    {productCategory}
                    <div className={styles["stat"]}>
                        <span className={styles["label"]}>Followers</span>
                        <span className={styles["value"]}>940</span>
                    </div>
                    <div className={styles["stat"]}>
                        <span className={styles["label"]}>Likes</span>
                        <span className={styles["value"]}>320</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
