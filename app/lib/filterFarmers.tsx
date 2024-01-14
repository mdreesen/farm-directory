export async function filterGrainBeefFarmer(farmer: any) {
    const category = ['Grain'];
    const filtering = farmer && farmer.filter((item: any) => {
        switch (true) {
            case item?.product_one_feed?.includes(category):
                return item;
                break

            case item?.product_two_feed?.includes(category):
                return item
                break

            case item?.product_three_feed?.includes(category):
                return item;
                break
            default:
                return
        };
    });
    return filtering
};

export async function filterGrassBeefFarmer(farmer: any) {
    const category = ['Grass'];
    const filtering = farmer && farmer.filter((item: any) => {
        switch (true) {
            case item?.product_one_feed?.includes(category):
                return item;
                break

            case item?.product_two_feed?.includes(category):
                return item
                break

            case item?.product_three_feed?.includes(category):
                return item;
                break
            default:
                return
        };
    })
    return filtering
};

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
    return filtering
};
