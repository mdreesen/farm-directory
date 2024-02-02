import styles from '@/app/styles/Farmer.module.css';
import { fetchFarmers } from '@/app/lib/data';
import { filterFarmerProducts } from '@/app/lib/filterFarmers';
import FarmerCard from "@/app/ui/farmer/FarmerCard";
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import Search from '@/app/ui/Search';


export default async function CategoryPage({
    searchParams,
    categoryName
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
    categoryName: string
}) {
    const farmers = await fetchFarmers();
    const query = searchParams?.query || '';
    // const totalPages = await searchFarmers(query);

    // const search = totalPages ? totalPages : farmerCategory


    const farmerCategory = await filterFarmerProducts(farmers, categoryName);
    const categoryFarmers = farmerCategory?.map((item: Object, index: number) => <FarmerCard key={index} farmerData={item} />);
    if (farmerCategory?.length === 0) return <NoFarmer />

    return categoryFarmers
}

