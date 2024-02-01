import FarmerCard from '@/app/ui/farmer/FarmerCard';
import { fetchFarmers, searchFarmers } from '@/app/lib/data';
import styles from '@/app/styles/Farmer.module.css';
import Search from '@/app/ui/Search';


export default async function CardsFarmers({ searchParams }) {
  const query = searchParams?.query || '';


  const farmers = await fetchFarmers() ?? [];
  const queryFarmers = await searchFarmers(query);
  const data = queryFarmers.length > 0 ? queryFarmers : farmers;

  const farmerCards = data?.map((item, index) => <FarmerCard key={index} farmerData={item} />)

  return (
    <div className={styles['container']}>
      <Search placeholder="Search Farmers..." />

      {farmerCards}
    </div>
  );
}