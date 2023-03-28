import { Loader } from '@mantine/core';
import React from 'react';

import styles from '../styles/Loader.module.css';

export function Loading() {
  return (
    <div className={styles['container']}>
      <Loader color='dark' />
    </div>
  );
}
