import { useState, useEffect } from "react";
import Head from 'next/head';

import Hero from '../components/Hero';
import AllFarmers from "../components/Farmers/AllFarmers";
import Loading from '../components/Loading';

import styles from '../styles/Farmer.module.css';

export default function Farmers() {

    const [farmer, setFarmer] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        (async () => {

            const getAllFarmerData = await fetch("/api/farmers").then(response => response.json());
            setFarmer(getAllFarmerData);

            setIsLoading(false);
        })();
    }, []);

    console.log(farmer)

    const isFarmer = farmer.length ? (
        <div className={styles['container']}>
            <AllFarmers farmer={farmer} setFarmer={setFarmer} />
        </div>
    ) : <p>No Farm Data Yet, Sad Face</p>

    return (
        <>
            <Head>
                <title>Farmers | Farm Directory</title>
                <meta name="description" content="Farm Directory Farmer Search" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Hero image source={'background-image'} imageTitle="Farmers" />
                {isLoading ? <Loading Loading={isLoading} /> : isFarmer}
            </main>
        </>
    )
}