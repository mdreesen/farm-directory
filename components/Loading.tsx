import { Loader } from '@mantine/core';

import styles from '../styles/Loader.module.css';

export default function Loading() {
  // const [isLoading, setIsLoading] = useState(true)

  // return <LoadingOverlay visible={props.isLoading} />
  return (
    <div className={styles['container']}>
      <Loader color='dark' />
    </div>
  );
}
