import { useState } from "react";

// import { useForm } from "@mantine/form";
// import { showNotification } from "@mantine/notifications";

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
