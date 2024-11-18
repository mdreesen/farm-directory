import Link from "next/link";
import { fetchSingleUserById } from "@/actions/user";
import ButtonFavorites from "@/ui/buttons/saveFarmer/ButtonFavorites";

export default async function Page() {
  const user = await fetchSingleUserById();

  const hasAddress =
    user?.address_city &&
    user?.address_state &&
    user?.address_street &&
    user?.address_zip;

  const formattedAddress = `${user?.address_street} <br/>${user?.address_city}, ${user?.address_state} ${user?.address_zip}`;
  const noAddressFound = (
    <div className="relative justify-center items-center w-full place-items-center">
      Welcome to The Farm Directory!
      To find farmers in your location, go ahead and input your information in the info tab or <Link href={`/profile/user/${user._id}/info`} className="text-[#7A3A30] underline">click here</Link>
    </div>
  );

  const address = hasAddress ? <span dangerouslySetInnerHTML={{ __html: formattedAddress }} /> : noAddressFound;

  const userSection = user?.favoriteFarmers?.length ? (
    <div className="px-4 sm:px-6 lg:px-8 mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-base font-semibold text-gray-900">Saved Farmers ({user?.favoriteFarmers.length})</h2>
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
                    {user?.favoriteFarmers.length === 1 ? 'Farm' : 'Farms'} Saved
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {user?.favoriteFarmers.map((item: any, index: number) => (
                  <tr key={`${item.email}-${index}`} className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-3 py-4 text-sm justify-between">
                      <a key={`${item.email}-${index}`} className="flex justify-between items-center px-3 py-4 text-sm text-[#7A3A30] underline" href={`/details/farmer/${item._id}`}>
                        {item.farm_name}
                        <ButtonFavorites farmer={item}/>

                      </a>

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
      {
        <div>
          <h3 className="text-2xl font-bold leading-tight">Address</h3>
          {address}

          {userSection}
        </div>
      }
    </div>
  );
}
