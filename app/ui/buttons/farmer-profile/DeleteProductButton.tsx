'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/styles/Form.module.css';

export default function DeleteProductButton(data: any, farmerId: string) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [enableToast, setEnableToast] = useState<boolean>(false);

  const router = useRouter();
  const formData = data?.data;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)

    const res = await fetch(`/api/Products/${formData?._id}/product`, {
      method: "PUT",
      cache: 'no-store',
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) throw new Error("Failed to delete product");

    setEnableToast(true);
    setIsLoading(false);

    setTimeout(() => {
      setEnableToast(false);
    }, 6000);


    router.push(`/profile-farmer/${farmerId}`);
    router.refresh();
  };



  return (
    <div className='w-full justify-center flex'>
      {isLoading ? <span className="text-yellow-500 flex justify-center">Logging Out...</span> : (
        <button onClick={handleSubmit} className={styles['deleteBtn']}>
          <div>Delete Product</div>
        </button>
      )}
    </div>
  );
};
