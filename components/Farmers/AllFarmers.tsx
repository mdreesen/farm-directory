import { EachFarmer } from 'components/Farmers/EachFarmer';

export function AllFarmers({ farmers }: { farmers: any }) {
  const farmerData = farmers || [];
  return (
    <>
      {farmerData.map((farmer: any) => {
        return farmer ? (
          <EachFarmer farmer={farmer} />
        ) : <div>No Data</div>
      })}
    </>
  );
}
