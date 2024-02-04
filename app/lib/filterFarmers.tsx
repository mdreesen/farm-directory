import Farmer from '@/app/(models)/Farmer';

export async function filterFarmerProducts(farmer: any, productTitle: string) {
    const category = [productTitle];
    // console.log('lkjsdfljsfljsdf', farmer)
    const filtering = farmer && farmer.filter((item: any) => {
        switch (true) {
            case item?.product_one_title?.includes(category):
                return item;
                break

            case item?.product_two_title?.includes(category):
                return item
                break

            case item?.product_three_title?.includes(category):
                return item;
                break
            default:
                return
        };
    });

    return filtering;
};
