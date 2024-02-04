import { fetchFarmers } from '@/app/lib/farmerSearch/data';
import { filterFarmerProducts } from '@/app/lib/filterFarmers';
import FarmerCard from "@/app/ui/farmer/FarmerCard";
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import Search from '@/app/ui/search/Search';
import { fetchSearchingFarmerData } from '@/app/lib/farmerSearch/findNearbyFarmers';
import SearchZipCode from '@/app/ui/search/SearchZipCode';

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
    const searching = await fetchSearchingFarmerData();
    const farmerData = searching ? searching : farmers
    const query = searchParams?.query || '';


    const farmerCategory = await filterFarmerProducts(farmerData, categoryName);
    const categoryFarmers = farmerCategory?.map((item: Object, index: number) => <FarmerCard key={index} farmerData={item} />);
    if (farmerCategory?.length === 0) return <NoFarmer />

    return (
        <>
        <div><SearchZipCode/></div>
            {categoryFarmers}
        </>
    )
}

