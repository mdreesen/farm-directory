import React from 'react';
import { Hero } from 'components/Hero';
import Head from 'next/head';
import styles from '/styles/Home.module.css';

export default function HomePage() {
  const abstract = (
    <section>
      <h2>About</h2>
      <p>We are a small group of folks with a strong desire to connect local consumers to local farmers. The idea was
        started by a fourth generation farmer from Northwest Montana who navigated the hurdles of direct marketing in
        today's world of social media, influencers, and food security issues caused by a pandemic. Our desire is to help
        farmers to get their name out there faster and easier than having to learn all the ins and outs of the latest
        popular apps, ad rules, or other headaches that just make it more difficult for folks to sell what they raise. It
        is our goal to be the go-to directory for local consumers to find the farm products they're looking for. Our
        Vision is to be the most complete and visited directory for finding farm products, apart from any social media or
        other online platform.
      </p>
    </section>
  );

  const whoWeAre = (
    <section>
      <h2>What is FarmDirectory.net?​</h2>
      <p>FarmDirectory.net is a directory of farm products, farmers, and farm-related businesses and products. The
        directory is subscription supported to ensure both a high quality experience for the local consumers and farmers,
        but also to provide revenue to support ads and increasing awareness of the website to develop local markets and
        website traffic. FarmDirectory.net is designed to allow farmers to update availability of their products as well
        as any pertinent information that may help the consumer decide to contact the farmer directly. FarmDirectory.net
        helps farmers by eliminating the need to build a website, learning how to post ads, or avoiding being flagged from
        social media ad bots for selling “animal parts”. FarmDirectory.net also helps farmers by allowing them to post all
        their products in one place and helping the public find them and the products they offer. Farmers don’t have to
        have a website, facebook page, or any other technology related thing to be listed on FarmDirectory.net. The farmer
        just needs $10/month and a phone or computer to sign up. FarmDirectory.net also helps farmers get their websites,
        blogs, social media pages, or any other information they care to share with their customers as well. Your online
        content is not required to sign up, but you can also drive traffic to your online content as well with your farm
        listing.
      </p>
    </section>
  );

  const whyCharge = (
    <section>
      <h2>Why Charge For This Service</h2>
      <p>
        Building a user-friendly, easily navigable and updatable website is neither easy, nor cheap, nor low-maintenance.
        Additionally, we advertise in your local areas to drive traffic to your listings. Advertising in certain avenues
        is not necessarily expensive, but we use smart advertising makes good use of your subscription dollars. We use
        targeted audiences on the major social media outlets as well as traditional audiences to “get the word out” that
        your farm not only exists, but you’re also direct marketing products to the public. In order to provide a good
        value to the subscribers, we have to charge a nominal fee to cover these expenses and provide a high-quality
        experience for both the subscribers and the local consumers. We’ve seen many privately-ran social media pages
        easily waste several times what we charge for our services in poorly worded and poorly targeted ads. We can do
        better, and we’d like to do it for you for less than a TV streaming service subscription.
      </p>
    </section>
  );

  return (
    <>
      <Head>
        <title>Home | Farm Directory</title>
        <meta name='description' content='Farm Directory Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Hero video source={'/videos/hero-video.mp4'} />
        {abstract}
        {whoWeAre}
        {whyCharge}
      </main>
    </>
  );
}
