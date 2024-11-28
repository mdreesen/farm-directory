'use client';
import { useRouter } from "next/navigation";
import { deleteUser } from '@/actions/user';
import { signOut } from "next-auth/react";

export default function ButtonDeleteUser() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const r = await deleteUser();

      signOut({ redirect: false }).then(() => {
        router.push("/");
      });

      router.refresh
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="text-center p-2">
      <span>Be sure, this will be permanently deleted with no option to undo.</span><br />
      <button type="submit" onClick={handleSubmit} className="my-2 rounded-md bg-[#7A3A30] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Delete Now
      </button>
    </div>
  )

}