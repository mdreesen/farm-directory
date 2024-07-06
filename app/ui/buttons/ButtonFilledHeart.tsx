"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ButtonFilledHeart(data: any) {

  const farmerData = data.farmerData;
  const userData = data.userData;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enableToast, setEnableToast] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)

    const res = await fetch(`/api/Users/${userData?._id}/favorite/delete`, {
      method: "PUT",
      cache: 'no-store',
      body: JSON.stringify({ farmerData }),
    });

    if (!res.ok) throw new Error("Failed to update User");

    setEnableToast(true);
    setIsLoading(false);

    setTimeout(() => {
      setEnableToast(false);
    }, 6000);

    router.refresh();
  };

  const heartFilled = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  );

  return data?.userData?._id && (
    <div onClick={handleSubmit} className="flex p-4 flex-col justify-center text-center items-center">

      {heartFilled}
      <span>Saved</span>
    </div>
  )
};
