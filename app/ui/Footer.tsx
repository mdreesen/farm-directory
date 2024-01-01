import Link from 'next/link';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

import styles from '@/app/styles/Footer.module.css';

export function Footer() {

  return (
    <div className={styles['container']}>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div className={styles['icons']}>
        <span>something</span>
        <span>something2</span>

      </div>
    </div>
  );
}
