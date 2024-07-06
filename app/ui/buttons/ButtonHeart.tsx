"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ButtonHeart(data: any) {

  const farmerData = data.farmerData;
  const userData = data.userData;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enableToast, setEnableToast] = useState<boolean>(false);

  const showSaveFarmer = data?.userData?._id && data?.userData?.isFarmer === false;

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)

    const res = await fetch(`/api/Users/${userData?._id}/favorite/add`, {
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

  return showSaveFarmer && (
    <div onClick={handleSubmit} className="flex p-4 flex-col justify-center text-center items-center">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      <span>Save</span>
    </div>
  )
};
