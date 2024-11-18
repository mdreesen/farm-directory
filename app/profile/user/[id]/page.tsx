'use client';
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data, status } = useSession();
  const userData = data?.user;

  const hasAddress =
    userData?.address_city &&
    userData?.address_state &&
    userData?.address_street &&
    userData?.address_zip;

  const formattedAddress = `${userData?.address_street} <br/>${userData?.address_city}, ${userData?.address_state} ${userData?.address_zip}`;
  const noAddressFound = (
    <div className="relative justify-center items-center w-full place-items-center">
      Welcome to The Farm Directory!
      To find farmers in your location, go ahead and input your information in the info tab or <Link href={`/profile/user/${id}/info`} className="text-[#7A3A30] underline">click here</Link>
    </div>
  );

  const favorites = userData?.favoriteFarmers;

  const address = hasAddress ? <span dangerouslySetInnerHTML={{ __html: formattedAddress }} /> : noAddressFound;

  const userSection = userData?.favoriteFarmers?.length ? (
    <div className="px-4 sm:px-6 lg:px-8 mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-base font-semibold text-gray-900">Favorite Farmers</h2>
          <span>{userData?.favoriteFarmers.length}</span>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Farm
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {userData?.favoriteFarmers.map((item: any, index: number) => (
                  <tr key={`${item.email}-${index}`} className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <Link key={`${item.email}-${index}`} className="flex flex-col px-3 py-4 text-sm text-[#7A3A30] underline" href={`/details/farmer/${item._id}`}>
                        {item.farm_name}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h3 className="mt-20 text-2xl font-bold leading-tight">No Farmers Saved</h3>
  )

  return (
    <div className="relative w-full">
      {status === 'authenticated' && (
        <div>
          <h3 className="text-2xl font-bold leading-tight">Address</h3>
          {address}

          {userSection}
        </div>
      )}
    </div>
  );
}
