
import { fetchSingleFarmerById } from '@/actions/farmer';
import ButtonDeleteProduct from '@/ui/buttons/ButtonDeleteProduct';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default async function Page() {

  const farmer = await fetchSingleFarmerById() as any;

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
                </div>
              ))}
            </div>
          </header>
        </main>
      </div>
    </div>
  )
}

