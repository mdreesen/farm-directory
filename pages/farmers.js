import { useState, useEffect } from "react";
import Head from 'next/head';

import Hero from '../components/Hero';
import AllFood from "../components/Food/AllFood";
import Loading from '../components/Loading';

import styles from '../styles/Farmer.module.css';

export default function Farmers() {

    const [food, setFood] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const getAllFood = await fetch("/api/food");
            const getAllFoodJson = await getAllFood.json();
            setFood(getAllFoodJson);

            setIsLoading(false);
        })();
    }, []);

    console.log(food)

    const isFood = food.length ? (
        <div className={styles['container']}>
            <AllFood food={food} setFood={setFood} />
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
                {isLoading ? <Loading Loading={isLoading} /> : isFood}
            </main>
        </>
    )
}