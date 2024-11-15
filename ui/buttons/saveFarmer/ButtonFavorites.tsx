import { isSavedFarmer } from "@/actions/user";
import ButtonSave from "@/ui/buttons/saveFarmer/ButtonSave";
import ButtonDeleteSavedFarmer from '@/ui/buttons/saveFarmer/ButtonDeleteSavedFarmer';

export default async function ButtonFavorites(farmer: any) {
    const isSaved = await isSavedFarmer(farmer);
    // console.log(isSaved)
    return (
        <div className="flex flex-col items-center mt-6 text-md font-medium text-gray-900">
            {isSaved === 'saved' && <ButtonDeleteSavedFarmer data={farmer.farmer} saved={isSaved} />}
            {isSaved === 'not_saved' && <ButtonSave data={farmer.farmer} saved={isSaved} />}
        </div>
    );
};
