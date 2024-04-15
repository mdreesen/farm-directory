import { filterFarmerProducts } from '@/app/lib/filterFarmers';
import { searchProducts } from '@/app/lib/search/SearchFarmers';
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import CardsFarmers from '../cardsFarmers';

export default async function CategoryPage({
    categoryName,
    query
}: {
    categoryName: string,
    query?: string
}) {

    const searchForFarmers = await searchProducts(categoryName) ?? [];

    if (!searchForFarmers) return <NoFarmer />

    return (
        <>
            <CardsFarmers searchFarmer={searchForFarmers} />
        </>
    )
}

