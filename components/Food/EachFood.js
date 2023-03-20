import { useState } from "react";

const EachFood = ({ food, setFood }) => {
  const { _id, postedAt, body, user: farmerUser } = food;
  return (
    <>
    <div>{new Date(postedAt).toLocaleString()}</div>
    <div>{farmerUser.name}</div>
    <div>{body}</div>
    </>
  );
};

export default EachFood;
