import FarmerCard from '@/app/ui/farmer/FarmerCard';
import { fetchFarmers, searchFarmers } from '@/app/lib/data';
import styles from '@/app/styles/Farmer.module.css';
import Search from '@/app/ui/Search';


export default async function CardsFarmers() {

  const farmers = await fetchFarmers() ?? [];

  const farmerCards = farmers?.map((item, index) => <FarmerCard key={index} farmerData={item} />)

  return (
    <div className={styles['container']}>
      {farmerCards}
    </div>
  );
}