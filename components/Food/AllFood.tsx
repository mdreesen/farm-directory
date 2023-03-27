import EachFood from 'components/Food/EachFood';

const AllFoods = ({ food, setFood }: { food: any; setFood: any }) => {
  return (
    <>
      {food.map((item: any) => (
        <div key={item._id}>
          <EachFood food={item} setFood={setFood} />
        </div>
      ))}
    </>
  );
};

export default AllFoods;
