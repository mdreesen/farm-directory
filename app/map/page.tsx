// pages/index.js
import { Metadata } from 'next';
import Map from '@/lib/googleMap';
import { fetchFarmersCoordinates } from '@/actions/farmer';

export const metadata: Metadata = {
  title: 'Map',
};

export default async function Page() {
  const farmerCoordinates = await fetchFarmersCoordinates() as any;
  console.log(farmerCoordinates)

  return (
    <div className='h-[100vh] content-center text-center bg-white'>
      <h1 className='mt-[98px] text-4xl text-base leading-7'>All Farmers</h1>
      <Map zoom={12} allCoordinates={farmerCoordinates} /> 
    </div>
  );
};