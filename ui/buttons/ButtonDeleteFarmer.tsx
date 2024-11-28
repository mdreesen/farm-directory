'use client';
import { useRouter } from "next/navigation";
import { deleteFarmer } from '@/actions/farmer';
import { signOut } from "next-auth/react";

export default function ButtonDeleteFarmer() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const r = await deleteFarmer();

      signOut({ redirect: false }).then(() => {
        router.push("/");
      });

      router.refresh
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="text-center">
      <span>Be sure, this will be permanently deleted with no option to undo.</span><br />
      <button type="submit" onClick={handleSubmit} className="rounded-md bg-[#7A3A30] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Delete Now
      </button>
    </div>
  )

}