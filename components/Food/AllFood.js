import EachFood from "./EachFood";

const AllFoods = ({ food, setFood }) => {
  return (
    <>
      {food.map((item) => (
        <div key={item._id}>
          <EachFood food={item} setFood={setFood} />
        </div>
      ))}
    </>
  );
};

export default AllFoods;