import React from 'react';
import styles from '@/app/styles/About.module.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'About Farm Directory',
}

export default function about() {

    return (
        <div className={styles['main']}>
            <h2>About Us</h2>

            <p>TheFarmDirectory.com was envisioned by a fourth generation farmer in northwest Montana.  Frustrated by big tech blocking or rejecting my ads for grass fed beef, I came up with the idea that farmers should have their own social media independent site to list their products and farm-related services.</p>

            <p>I wanted it to be easily navigable, searchable by location, and easily updatable by farmers.  I also wanted it to be a hub where local consumers could find all the social media the farmers were producing easily and support the farmers' social media efforts.  Thefarmdirectory.com checks those boxes.</p>

            <p>A buddy of mine offered to start working on the idea in early 2023.  Little did he know what he was getting into, but he's been a rockstar in figuring things out!</p>

            <p>We don't know how we're going to fund it yet, but we need your help:<br />

                1.  Go to the sign up page, and whether you're a farmer or a consumer looking for local products, please give us a try.  <a href="/authentication/signup">Link here to sign up page</a><br />
                2.  Give us a like, follow, and share on Facebook <a href='https://www.facebook.com/Thefarmdirectory'>www.facebook.com/Thefarmdirectory</a><br />
                3.  Subscribe to our email<br />
                4.  If you're a farmer, let us know what would be helpful as far as features, usability, etc!  Email me directly at <a href='mailto:kenny@thefarmdirectory.com'>kenny@thefarmdirectory.com!</a><br />
            </p>

            <p>Thank you for supporting locally-raised food and ensuring we have choices in the future by supporting your local farms!</p>

            <p>-Kenny</p>

        </div>
    );
};

