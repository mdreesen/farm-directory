export async function filterGrainBeefFarmer(farmer: any) {
    const category = ['Grain'];
    const filtering = farmer.filter((item: any) => {
        if (item?.product_one_feed) return item?.product_one_feed?.includes(category);
        if (item?.product_two_feed) return item?.product_two_feed?.includes(category)
        if (item?.product_three_feed) return item?.product_three_feed?.includes(category)
    });
    return filtering
};

export async function filterGrassBeefFarmer(farmer: any) {
    const category = ['Grass'];
    const filtering = farmer.filter((item: any) => {
        if (item?.product_one_feed) return item?.product_one_feed?.includes(category);
        if (item?.product_two_feed) return item?.product_two_feed?.includes(category);
        if (item?.product_three_feed) return item?.product_three_feed?.includes(category);
    })
    return filtering
};

export async function filterEggFarmer(farmer: any) {
    const category = ['Grass'];
    const filtering = farmer.filter((item: any) => {
        if (item?.product_one_feed) return item?.product_one_feed?.includes(category);
        if (item?.product_two_feed) return item?.product_two_feed?.includes(category);
        if (item?.product_three_feed) return item?.product_three_feed?.includes(category);
    })
    return filtering
};
