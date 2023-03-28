import { Loader } from '@mantine/core';

import styles from '/styles/Loader.module.css';

export function Loading() {
  return (
    <div className={styles['container']}>
      <Loader color='dark' />
    </div>
  );
}
