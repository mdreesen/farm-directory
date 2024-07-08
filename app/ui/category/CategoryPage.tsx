import { searchFarmers } from '@/app/lib/search/SearchFarmers';
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import CardsFarmers from '../cardsFarmers';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function CategoryPage({
    categoryName,
    query
}: {
    categoryName: string,
    query?: string
}) {

    const searchForFarmers: any = await searchFarmers(query ?? categoryName) ?? [];

    if (searchForFarmers.length === 0) return <NoFarmer />

    return <CardsFarmers searchFarmer={searchForFarmers} />
}

