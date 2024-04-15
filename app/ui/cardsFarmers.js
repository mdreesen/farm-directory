import FarmerCard from '@/app/ui/farmer/FarmerCard';
import { fetchFarmers } from '@/app/lib/farmerSearch/data';
import styles from '@/app/styles/Farmer.module.css';

export default async function CardsFarmers(searchFarmer) {
  console.log(searchFarmer?.searchFarmer)

  const farmerCards = searchFarmer?.searchFarmer?.map((item, index) => <FarmerCard key={index} farmerData={item} />)

  return (
    <div className={styles['container']}>
      {farmerCards}
    </div>
  );
}