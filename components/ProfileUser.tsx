import React from 'react';
import styles from '../styles/FarmerProfile.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';

export function ProfileUser() {
    const { user } = useUser();
    console.log(user)

    return (
        <section className={styles['container']}>

        </section>
    );
};