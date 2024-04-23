'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteProductButton(data: any, id: any) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [enableToast, setEnableToast] = useState<boolean>(false);

  console.log(data?.data?.data?._id)

  const router = useRouter();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)

    const res = await fetch(`/api/Products/${id?.id}/products`, {
        method: "PUT",
        cache: 'no-store',
        body: JSON.stringify({ formData: id?.id }),
    });

    if (!res.ok) throw new Error("Failed to delete product");

    setEnableToast(true);
    setIsLoading(false);

    setTimeout(() => {
        setEnableToast(false);
    }, 6000);

    router.refresh();
};



  return (
    <div>
      {isLoading ? <span className="text-yellow-500 flex justify-center">Logging Out...</span> : (
        <button onClick={handleSubmit} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Delete Product</div>
        </button>
      )}
    </div>
  );
};
