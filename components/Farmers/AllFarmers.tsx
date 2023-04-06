import { EachFarmer } from 'components/Farmers/EachFarmer';

export function AllFarmers({ farmers }: { farmers: any }) {
  const farmerData = farmers || [];
  return (
    <>
      {farmerData.map((farmer: any) => <EachFarmer farmer={farmer} key={farmer._id}/>)}
    </>
  );
}
