import { AllFoods } from 'components/Food/AllFood';
import { Hero } from 'components/Hero';
import { ax } from 'lib/axios.lib';
import Head from 'next/head';
import { LogError } from 'utils/util';
import styles from '/styles/Farmer.module.css';

export default function Farmers({ food }: { food?: any[] }) {
  return (
    <>
      <Head>
        <title>Farmers | Farm Directory</title>
        <meta name='description' content='Farm Directory Farmer Search' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero image source={'background-image'} imageTitle='Farmers' />
        <div className={styles['container']}>{food && <AllFoods food={food} />}</div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const { documents } = await ax.farmers.find;
    return {
      props: { food: documents },
    };
  } catch (error) {
    LogError(error);
    return { props: {} };
  }
}
