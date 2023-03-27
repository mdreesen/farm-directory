import EachFarmer from "./EachFarmer";

const AllFarmers = ({ farmer, setFarmer }) => {
  return (
    <>
      {farmer.map((item) => (
        <div key={item._id}>
          <EachFarmer farmer={item} serFarmer={setFarmer} />
        </div>
      ))}
    </>
  );
};

export default AllFarmers;