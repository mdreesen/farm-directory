'use client';
import { Switch } from '@headlessui/react'
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useGeolocation } from "@uidotdev/usehooks";

import { updateUserFilters } from '@/actions/user';

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useSession();
  const userData = data?.user;
  const userFilters = userData?.filters
  const id = params.id;
  const { latitude, longitude, loading } = useGeolocation();

  const router = useRouter();
  const ref = useRef(null);
  const [myLocation, setMyLocation] = useState(userFilters?.use_my_location as boolean ?? false);

  const handleSubmit = async () => {
    try {
      const r = await updateUserFilters({
        email: userData?.email,
        use_my_location: myLocation,
        currentLocation: { latitude: latitude, longitude: longitude }

      });
      router.refresh
      router.push(`/profile/user/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    setMyLocation((prevIsChecked) => !prevIsChecked);
  };

  // Using this useEffect to update on mount with state
  useEffect(() => {
    setMyLocation(userFilters?.use_my_location as boolean);
  }, [userFilters]); // Re-fetch when the 'userFilters' changes


  return !loading ? (
    <form className="bg-white" ref={ref} action={handleSubmit}>
      <div className="space-y-12">

        <div className="border-b pb-12">
          <h2 className="t-2 text-balance text-5xl font-semibold text-gray-900 sm:text-6xl tracking-tight">Filter Settings</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Use my location {myLocation ? '(using my current location)' : '(using address from my info)'}
              </label>
              <div className="mt-2">
                <Switch
                  defaultChecked={userData?.filters?.use_my_location as boolean}
                  checked={myLocation as boolean}
                  onChange={handleChange}
                  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#7A3A30]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  ) : (
    <div>
      <h2 className='text-2xl'>Checking your location</h2>
      <span>To use your location, please accept location services</span>
    </div>
  )
}
