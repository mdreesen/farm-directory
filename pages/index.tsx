import { Hero } from 'components/Hero';
import Head from 'next/head';
import styles from '/styles/Home.module.css';

export default function Home() {
  const abstract = (
    <section>
      <h2>Abstract</h2>
      Farmers have always been good at raising crops and products. One area that many farmers are falling short of their
      potential is in marketing their crops and products directly to the public. Marketing has four parts to it:
      product, price, promotion, and place. Product and price are fairly straightforward; they are set by the farmers.
      Promotion and place are the areas where the farm directory intends to focus. As a farmer who has been direct
      marketing beef, straw, and hay off our farm since 2014, I cannot tell you how many times I have referred folks to
      other farmers when I was either sold out or didn’t have some various product they were looking for. My local
      telephone network often falls short in helping connect farmers to local consumers. There are many farmers out
      there who would benefit greatly from a more sophisticated but simpler way to get their products advertised to the
      general public rather than running an ad in the local paper, having their ads for their animals repeatedly
      rejected by Facebook bots, or having a diminishing audience see their Craigslist ad. Additionally, farmers
      frequently run out, or restock of various products, and a tool that allows farmers to say when things are
      available would be incredibly useful and save both a lot of time and unnecessary phone calls. FarmDirectory.net is
      a new concept in that it is a one-stop directory for local consumers to find their local farmers and find exactly
      what they’re looking for. No word-of-mouth, “there’s a guy down the hill who I think sells pigs”, no second cousin
      who has a few chickens anymore, no texting strangers other people’s phone numbers who might have something they’re
      looking for. FarmDirectory.net will have the farmers, all those farmers’ products listed, and whether or not they
      are sold out. Those product listings will include enough information for folks to make a decision on whether or
      not they want to contact that farmer or not. FarmDirectory.net will be searchable by location, type, description,
      and any other information the farmer happens to attach to their product listings. The farmers will be able to be
      sorted by location as well, so a person can look for farmers close to where they live, regardless of what they’re
      selling, just to see if there’s somebody close who might have something that consumer would want to start buying.
      Eggs? Milk? Maybe some fresh vegetables from a roadside self-service stand? No problem. It’ll all be listed and
      the contact information of that farmer will be available to the public from one single website. FarmDirectory.net
      will be funded by subscriptions from the farmers which includes website advertising, adding/removing products and
      updating availability as required. Additional funding may be secured from grants, individual and corporate
      donations and/or sponsorships. The subscriptions will fund the labor required to maintain and update the website
      and associated app as well as pay for advertising and “getting the word out” for FarmDirectory.net.
    </section>
  );

  const need = (
    <section>
      <h2>Need</h2>
      Local consumers need a one-stop shop to find their local farmers. This used to be the “yellow pages” back when
      folks had land lines. Now, there are even folks within city limits with some chickens who are looking to sell a
      few dozen a week. A native, stand-alone site that is not subject to whatever the biggest social media company’s
      latest farm-unfriendly rules are that will easily connect local consumers to local farmers is the need.
      FarmDirectory.net will list all the farmers that have subscribed to the service, the products the farmers sell,
      relevant product information, contact information for the farmers, and the farm locations. Local consumers will be
      able to sort by general categories, location, and/or search by farmer, farm name, or by product type. Farmers no
      longer will have to know how to circumvent Facebook ad rules for selling their beef. They won’t have to build
      their own website and somehow get local traffic to it via traditional advertising. They won’t have to pay several
      hundred or even thousands of dollars to have a custom website made for the few products they sell. They can simply
      subscribe to FarmDirectory.net, list their products, and start building their own customer base without all the
      headaches of doing your own marketing.
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
        {need}
      </main>
    </>
  );
}
