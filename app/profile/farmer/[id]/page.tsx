
import { fetchSingleFarmerById } from '@/actions/farmer';
import ButtonDeleteProduct from '@/ui/buttons/ButtonDeleteProduct';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
};

export default async function Page() {

  const farmer = await fetchSingleFarmerById() as any;
  const farmerId = JSON.parse(JSON.stringify(farmer._id));
  const usersFavorited = farmer.favoriteUsers;

  const userSection = (
    <div className="px-4 sm:px-6 lg:px-8 mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Following users ({farmer.favoriteUsers.length})</h1>
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
                    Email
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {usersFavorited.map((person: any) => (
                  <tr key={person.email} className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <a href={`mailto:${person.email}`} className="text-[#7A3A30] hover:text-[#7A3A30]">
                        email user<span className="sr-only">, {person.email}</span>
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
  )

  return (
    <div>
      <div>
        <main>
          <header>

            {/* Heading */}
            <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-900 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
              <div>
                <div className="flex items-center gap-x-3">
                  <h1 className="text-4xl flex flex-col gap-x-3 text-base leading-7">
                    <span className="font-semibold text-white text-4xl">Products</span>
                    <span className="font-semibold text-white text-2xl">Number of Products {farmer.products.length}</span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 bg-gray-900 sm:grid-cols-2 lg:grid-cols-4">
              {farmer.products.map((item: any, index: number) => (
                <div
                  key={index}
                  className={classNames(
                    index % 2 === 1 ? 'sm:border-l' : index === 2 ? 'lg:border-l' : '',
                    'border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8',
                  )}
                >
                  <p className="mt-2 flex flex-col items-baseline gap-x-2">
                    <span className="text-xl font-semibold tracking-tight text-white">{item.product_title}</span>
                    <span className="text-lg font-semibold tracking-tight text-white">{item.product_price}</span>
                    <span className="text-lg font-semibold tracking-tight text-white">{item.product_available}</span>
                    <span className="text-lg font-semibold tracking-tight text-white">{item.product_show === 'true' ? 'Product is showing to public' : 'Product is hidden from public'}</span>
                    {item.unit ? <span className="text-sm text-gray-400">{item.unit}</span> : null}
                  </p>

                  {item && <ButtonDeleteProduct data={JSON.parse(JSON.stringify(item._id))} />}

                  <a href={`/profile/farmer/${farmerId}/products/${item.id}`} className="rounded-md m-4 bg-yellow-500	 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Update</a>
                </div>
              ))}
            </div>

            {/* Users saved */}
            {userSection}

          </header>
        </main>
      </div>
    </div>
  )
}

