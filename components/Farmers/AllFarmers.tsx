import { EachFarmer } from 'components/Farmers/EachFarmer';
import useFarmerUser from '../../utils/composable/useFarmerUser';

export function AllFarmers({ farmers }: { farmers: any }) {
  const farmerData = farmers || [];
  useFarmerUser(farmerData)
  return (
    <>
      {farmerData.map((farmer: any) => <EachFarmer farmer={farmer} key={farmer._id}/>)}
    </>
  );
}
