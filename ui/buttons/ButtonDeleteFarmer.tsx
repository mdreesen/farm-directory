'use client';
import { useRouter } from "next/navigation";
import { deleteFarmer } from '@/actions/farmer';


export default function ButtonDeleteFarmer() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const r = await deleteFarmer();
      router.refresh
      router.push(`/`);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <button type="submit" onClick={handleSubmit} className="rounded-md bg-[#7A3A30] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
      Delete
    </button>
  )

}