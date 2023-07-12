import React from 'react';
import styles from '../styles/FarmerProfile.module.css';

export function FarmerProfile(props: any) {

    console.log('!@!', props?.data)

    const products = props?.data?.product?.map((item: any) => (
        <div className={styles['section-products']}>
            <span>{item?.product_name}</span>
            <div>
                {item?.product_feed && <span>{item?.product_feed}</span>}
                <span>{item?.product_description}</span>
                <span>{item?.available ? 'Available Now' : 'Not Available'}</span>
                <span>{item?.show ? 'Product is showing to the public.' : 'Product is hidden from public.'}</span>
            </div>
        </div>
    ))

    return (
        <section className={styles['container']}>
            <h2>{props?.data?.user?.farm_name}</h2>
            <span>Name: {props?.data?.user?.first_name} {props?.data?.user?.last_name}</span>
            <span>
                Address: {props?.data?.user?.address_road}<br />{props?.data?.user?.address_city}, {props?.data?.user?.address_state} {props?.data?.user?.address_zip}
            </span>
            <span>Email:{props?.data?.user?.email}</span>
            <span>Phone: {props?.data?.user?.phone}</span>
            <a href={props?.data?.user?.website}>{props?.data?.user?.website}</a>
            <span>Facebook: {props?.data?.user?.facebook}</span>
            <span>Instagram: {props?.data?.user?.instagram}</span>

            <div>
                <h3>Products</h3>
                {products}
            </div>
        </section>
    );
};