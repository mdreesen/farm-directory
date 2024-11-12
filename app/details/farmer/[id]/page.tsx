import { fetchFarmerDetails } from '@/actions/farmer';

export default async function Page({ params }: { params: { id: string } }) {

  const id = params.id;
  const farmer = await fetchFarmerDetails(id) as any;

  const products = farmer.products.map((item: any) => {
    return item.product_show === 'true' && (
      <li key={item._id}>
        <img alt="" src={`/images/products/${item.product_image}`} className="mx-auto h-24 w-24 rounded-full" />
        <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
          {item.product_title}
        </h3>

        <p className="pt-2 text-base leading-6 text-gray-600">{item.product_description}</p>

        <p className="pt-2 text-base leading-6 text-gray-600">{item.product_price}</p>

        <p className="pt-2 text-base leading-7 tracking-tight text-gray-900 flex flex-col">
          <span>Product Availability</span>
          <span>{item.product_available}</span>
        </p>
      </li>
    );
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="relative flex justify-center items-center w-full place-items-center">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{farmer.farm_name}</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">{farmer.farm_about ?? ''}</p>
            </div>

            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
              {products}
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
