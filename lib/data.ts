// 'use client'
import { Farmers } from './models';
import { connectToDB } from './utils';

export const fetchFarmers = async () => {
  try {
    connectToDB()

    const farmers = Farmers?.find();
    return farmers
  } catch(err) {
    console.log(err);
    throw new Error("Couldn't fetch Farmers")
  }
}