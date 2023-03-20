import { useState } from "react";

const AllFood = ({ food, setFood }) => {
  const { postedAt } = food;

  return (
    <>
    <div>
    {new Date(postedAt).toLocaleString()}
    </div>
    </>
  );
};

export default AllFood;
