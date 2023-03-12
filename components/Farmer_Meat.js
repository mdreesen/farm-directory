// Import meatFarmers data
import meatData from '../utils/meatFarmers.json';

export default function Farmer_Meat(props) {

    // console.log(meatData)
    // let productItem = props.product;
    const eachFarmer = props.product ? meatData[`${props.product}`]?.map((item, index) => {
        return (
            <section key={`Farmer-${item.name}`}>
                <div>
                    <h3>{item?.name}</h3>
                    <p>{item?.description}</p>
                </div>
            </section>
        )
    }) : '';

    return (
        <div>
            <h2>Meat Farmer</h2>
            {eachFarmer}
        </div>
    )
}