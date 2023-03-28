import { EachFood } from 'components/Food/EachFood';

export function AllFoods({ food }: { food: any[] }) {
  return (
    <>
      {food.map((item: any) => (
        <div key={item._id}>
          <EachFood food={item} />
        </div>
      ))}
    </>
  );
}
