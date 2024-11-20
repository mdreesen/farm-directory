import { fetchFarmerDetails } from '@/actions/farmer';
import ShareFacebook from "@/ui/socialMedia/share/ShareFacebook";
import SharePinterest from "@/ui/socialMedia/share/SharePinterest";
import ShareTwitter from "@/ui/socialMedia/share/ShareTwitter";
import ShareEmail from "@/ui/socialMedia/share/ShareEmail";
import MapSingle from '@/lib/googleMapSingle';

export default async function Page({ params }: { params: { id: string } }) {

  const id = params.id;
  const farmer = await fetchFarmerDetails(id) as any;

  const hasSocialMedia = farmer.facebook || farmer.instagram || farmer.tictok || farmer.x_twitter;
  const hasProducts = farmer.products.length > 0;
  const hasWebsite = farmer.website;

  const farmerLocation = {
    longitude: farmer.longitude,
    latitude: farmer.latitude
  }


  const socials = (
    <div className='mt-6 flex gap-x-6'>
      { /* Facebook */}
      {farmer.facebook && (
        <a href={farmer.facebook}>
          <button type="button" data-twe-ripple-init="" data-twe-ripple-color="light" className="mb-2 inline-block rounded-full bg-[#1877f2] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </button>
        </a>
      )}

      { /* Instagram */}
      {farmer.instagram && (
        <a href={farmer.instagram}>
          <button type="button" data-twe-ripple-init="" data-twe-ripple-color="light" className="mb-2 inline-block rounded-full bg-[#c13584] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </button>
        </a>
      )}

      { /* TikTok */}
      {farmer.tictok && (
        <a href={farmer.tictok}>
          <button type="button" data-twe-ripple-init="" data-twe-ripple-color="light" className="mb-2 inline-block rounded-full bg-[#6a76ac] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </span>
          </button>
        </a>
      )}

      { /* X */}
      {farmer.x_twitter && (
        <a href={farmer.x_twitter}>
          <button type="button" data-twe-ripple-init="" data-twe-ripple-color="light" className="mb-2 inline-block rounded-full bg-black p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </button>
        </a>
      )}
    </div>
  );

  const share = (
    <div className='mt-6 flex gap-x-6'>
      <ShareFacebook data={id} />
      <SharePinterest data={id} />
      <ShareTwitter data={id} />
      <ShareEmail data={id} />
    </div>
  );

  const products = farmer.products.map((item: any) => {
    return item.product_show === 'true' && (
      <li key={item._id}>
        {item.product_image && <img alt={item.product_image} src={`/images/products/${item.product_image}`} className="mx-auto h-24 w-24 rounded-full" />}
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
  });

  const address = (
    <div className='mt-16'>
      <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Locate</h3>
      <ul role="list">
        <a className="text-[#7A3A30] underline" href={`https://maps.google.com/?q=${farmer?.address_road} ${farmer?.address_city}, ${farmer?.address_state} ${farmer?.address_zip}`} target="_blank">{`${farmer?.address_road} ${farmer?.address_city}, ${farmer?.address_state} ${farmer?.address_zip}`}</a>

        {farmerLocation && (
          <div className='h-[30vh] content-center text-center bg-white'>
            <MapSingle zoom={12} coordinates={farmerLocation} />
          </div>
        )}

      </ul>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="relative flex justify-center items-center w-full place-items-center">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{farmer.farm_name}</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">{farmer.farm_about ?? ''}</p>
              {hasWebsite && <a className="text-[#7A3A30] underline" href={farmer.website}>Visit our website.</a>}
            </div>

            {/* Products */}
            {hasProducts ? (
              <div className='mt-20'>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Products</h3>
                <ul
                  role="list"
                  className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                >
                  {products}
                </ul>
              </div>
            ) : (
              <div className='mt-20'>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">No Products Available</h3>
              </div>
            )}

            {address}


            {/* Socials */}
            {hasSocialMedia && (
              <div className='mt-8'>
                <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-lg">Follow this farmer</h3>
                <ul
                  role="list"

                >
                  {socials}
                </ul>
              </div>
            )}

            {/* Share Socials */}
            <div className='mt-8'>
              <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-lg">Share this farmer</h3>
              <ul
                role="list"

              >
                {share}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
