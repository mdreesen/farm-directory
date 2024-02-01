import Farmer from '@/app/(models)/Farmer';

export async function filterFarmerProducts(farmer: any, productTitle: string) {
    const category = [productTitle];
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

    // try {
    //     const farmers = await Farmer.find(
    //         {
    //             $text: {
    //                 $search: query,
    //                 $caseSensitive: false,
    //                 $diacriticSensitive: false
    //             },
    //         }
    //     )
    //     console.log(farmers)

    //     const content = farmers.length > 0 ? farmers : filtering;
    //     console.log(content)
    //     return filtering
    // } catch (error) {
    //     console.log(error)
    //     return error
    // }
};
