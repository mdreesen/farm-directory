import React from 'react';
import { EachFarmer } from './EachFarmer';

export function AllFarmers({ farmers }: { farmers: any }) {
  return (
    <>
      {farmers.map((farmer: any) => (
        <div key={farmer._id}>
          <EachFarmer farmer={farmer} />
        </div>
      ))}
    </>
  );
}
