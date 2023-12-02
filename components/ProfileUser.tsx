import React from 'react';
import styles from '../styles/FarmerProfile.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';

export function ProfileUser() {
    const { user } = useUser();

    return (
        <section className={styles['container']}>
            <section className={styles['container']}>
                <h2>{user?.email}</h2>
                <span>Name: {user?.name}</span>
                <span>Updated At: {user?.updated_at}</span>
            </section>
        </section>
    );
};