import { searchFarmers } from '@/app/lib/search/SearchFarmers';
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import CardsFarmers from '../cardsFarmers';

export default async function CategoryPage({
    categoryName,
    query
}: {
    categoryName: string,
    query?: string
}) {

    const searchForFarmers: any = await searchFarmers(categoryName) ?? [];

    if (searchForFarmers.length === 0) return <NoFarmer />

    return (
        <>
            <CardsFarmers searchFarmer={searchForFarmers} />
        </>
    )
}

