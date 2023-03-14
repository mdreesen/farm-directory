// Import meatFarmers data
import meatData from '../utils/food/meat.json';

// Import Components
import Card from '../components/Card';

export default function Farmer_Meat(props) {

    const products = [props.product]

    const beef = products.includes('beef') ?
        meatData?.beef.map(data => {
            const feed = data?.grassFinished ? data?.grassFinished : data?.grainFinished;

            const title = data?.grassFinished ? 'Grass Finished' : 'Grain Finished';

            return (
                <section>
                    <h2>{title}</h2>
                    {
                        feed.map(item => <Card logo={`/images/logos/${item?.logo}`} name={item?.name} description={item?.description}/>)
                    }
                </section>
            )

        })
    : ''

    return (
        <div>
            {beef}
        </div>
    )
}