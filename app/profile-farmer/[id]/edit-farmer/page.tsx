// 'use client';
import React from 'react';
import { UpdateFarmer } from '@/app/ui/forms/UpdateFarmer';


export default async function Page(params: any) {
console.log(params)
  return (
    <div>
      <UpdateFarmer params={params} />
    </div>
  )
}