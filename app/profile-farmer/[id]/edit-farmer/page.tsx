'use client';
import React from 'react';
import { UpdateFarmer } from '@/app/ui/forms/UpdateFarmer';


export default async function Page({ params }: any) {

//   const isUser =  async (id: string) => {
//     try {
//         const res = await fetch(`api/Users/${id}`, {
//             cache: "no-store"
//         });
//         return res?.json()
//     } catch (error) {
//         console.log(error);
//         return error
//     }
// };

  // let updateFarmerData = {};

  // updateFarmerData = await isUser(params?.id);
  // console.log(updateFarmerData);

  return (
    <div>
      <UpdateFarmer />
    </div>
  )
}