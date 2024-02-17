import FarmerDetails from '@/app/ui/farmer/FarmerDetails';
import styles from '@/app/styles/FarmerProfile.module.css';

import { fetchSingleFarmerByEmail } from '@/app/lib/farmerSearch/data';

export default async function Page() {
  const farmerUserData = await fetchSingleFarmerByEmail();

  return (
    <div className={styles['container']}>
      <FarmerDetails data={farmerUserData} />
    </div>
  );
}