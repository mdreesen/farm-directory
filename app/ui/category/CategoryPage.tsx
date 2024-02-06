import { fetchFarmers } from '@/app/lib/farmerSearch/data';
import { filterFarmerProducts } from '@/app/lib/filterFarmers';
import { searchFarmers } from '@/app/lib/search/SearchFarmers';
import FarmerCard from "@/app/ui/farmer/FarmerCard";
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import SearchZipCode from '@/app/ui/search/SearchZipCode';
import CardsFarmers from '../dashboard/cardsFarmers';
import Search from '../search/Search';

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

    const query = searchParams?.query ?? categoryName;
    console.log(query)

    const searchForFarmers = await searchFarmers(query);

    const farmerCategory = await filterFarmerProducts(farmers, categoryName);

    if (farmerCategory?.length === 0) return <NoFarmer />

    return (
        <>
            <div className='px-8'>
                <Search placeholder='Search for farmers...' />
            </div>
            <CardsFarmers searchFarmer={farmerCategory} />
        </>
    )
}

