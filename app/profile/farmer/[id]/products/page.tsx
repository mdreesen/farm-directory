import { fetchSingleFarmerById } from '@/actions/farmer';
import ProductMetricMenu from '@/ui/selectMenus/ProductMetricMenu';
import ProductNameMenu from '@/ui/selectMenus/ProductNameMenu';
import BooleanMenu from '@/ui/selectMenus/BooleanMenu';
import ShowMenu from '@/ui/selectMenus/ShowMenu';


export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const farmer = await fetchSingleFarmerById(id) as any;

  return (
    <div className="bg-white">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Make your products</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="product" className="block text-sm font-medium leading-6 text-gray-900">

                </label>
                <div className="mt-2">
                  <ProductNameMenu />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    placeholder="Grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs)."
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Price
                </label>
                <div className="mt-2 flex">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="price"
                      name="price"
                      type="text"
                      placeholder="$1.00"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <ProductMetricMenu/>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="show" className="block text-sm font-medium leading-6 text-gray-900">
                  Is this product in stock or available?
                </label>
                <div className="mt-2">
                  <ShowMenu />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="show" className="block text-sm font-medium leading-6 text-gray-900">
                  Do you want to show this product to the public?
                </label>
                <div className="mt-2">
                  <BooleanMenu />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>

      <div className="relative flex justify-center items-center w-full place-items-center">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{`${farmer.farm_name}'s Products`}</h3>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
              {farmer.products.map((item: any) => (
                <li key={item._id}>
                  <img alt="" src={'/images/products/beef.webp'} className="mx-auto h-24 w-24 rounded-full" />
                  <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {item.product_title}
                  </h3>

                  <p className="pt-2 text-base leading-6 text-gray-600">{item.product_description}</p>

                  <p className="pt-2 text-base leading-7 tracking-tight text-gray-900 flex flex-col">
                    <span>Product Availability</span>
                    <span>{item.product_available}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
