import FarmerCard from '@/app/ui/farmer/FarmerCard';
import styles from '@/app/styles/Farmer.module.css';

export default async function CardsFarmers(searchFarmer) {

  const farmerCards = searchFarmer?.searchFarmer?.map((item, index) => <FarmerCard key={index} farmerData={item} />)

  return (
    <div className={styles['container']}>
      {farmerCards}
    </div>
  );
}