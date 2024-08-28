import { useParams } from 'next/navigation';
import { fetchSingleFarmerById } from '@/actions/farmer';

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(id);
  const farmer = await fetchSingleFarmerById(id) as any;
  console.log(farmer)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex justify-center items-center w-full place-items-center">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{farmer.farm_name}</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                best results for our clients.
              </p>
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
    </main>
  );
}
