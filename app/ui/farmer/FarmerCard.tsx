import styles from '@/app/styles/farmer/FarmerCard.module.css';
import Link from 'next/link';
import Image from 'next/image'
import WrapperFarmerCard from '@/app/wrappers/WrapperFarmerCard';
import ButtonHeart from '@/app/ui/buttons/ButtonHeart';
import ButtonFilledHeart from '@/app/ui/buttons/ButtonFilledHeart';
import { loggedInUserData } from '@/app/lib/cookieData';
import { fetchSingleUserByEmail } from '@/app/lib/dataUser/data';

export default async function FarmerCard(farmerData: any) {

    const data = JSON.parse(JSON.stringify(farmerData?.farmerData));
    const auth = await loggedInUserData();
    const userData = await fetchSingleUserByEmail(auth?.email ?? '');
    const parse = await JSON.parse(JSON.stringify(userData));

    const products = data?.products?.map((item: any, index: number) => item?.product_show === 'true' && <span key={`${item?.product_title}-${index}`}>{item?.product_title}</span>)

    const farmLogo = (
        <h2 className="flex w-[full] font-light lg:w-full lg:h-32 text-[#7A3A30] justify-center items-center p-4 bg-[#F8F8FF]">{data?.farm_name}</h2>
    );

    const farmerInfo = (
        <div className="text-sm">
            <p className="text-gray-900 leading-none mb-1">{data?.first_name} {data?.last_name}</p>
            <p className="text-gray-600">{data?.address_state}</p>
        </div>
    );

    const farmerDetail = data?.products?.length > 0 && (
        <div className="mb-2 flex flex-col justify-center align-middle items-center">
            <div className="text-gray-600 font-bold text-l">Products</div>
            <p className="text-gray-700 text-base flex items-center gap-x-2 flex-col lg:flex-col md:flex-col text-center">
                {products}
            </p>
        </div>
    );

    const favorite = parse?.favoriteFarmers?.filter((item: any) => item._id.includes(data._id))

    return (
        <WrapperFarmerCard>
            <div className={`${styles['card']} flex flex-col max-w-sm lg:max-w-full justify-center`}>
                {farmLogo}
                <div className={`${styles['details']} border-r border-b border-l lg:border-l-0 lg:border-t bg-[#F8F8FF] p-4 flex flex-col justify-between leading-normal lg:w-[32rem]`}>
                    {farmerDetail}
                    <div className='flex w-full justify-center mb-2'>
                        <Link href={`/farmer/details/${data?._id}`}><button className="rounded-md border p-2 hover:bg-grey-200 text-gray-700">Details</button></Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            className="w-10 h-10 rounded-full mr-4"
                            src="/images/logos/logoTwo.webp"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                        {farmerInfo}
                    </div>

                    {favorite?.length === 1 ? <ButtonFilledHeart farmerData={data} userData={parse} /> : <ButtonHeart farmerData={data} userData={parse} />}
                </div>
            </div>
        </WrapperFarmerCard>
    );
}
