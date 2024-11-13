"use client";
import { useRouter } from "next/navigation";
import { updateUserProfileImg } from '@/actions/user';
import { PlusIcon } from '@heroicons/react/20/solid'

import { UploadButton } from "@/lib/uploadthing";
import { imageRemove } from "@/actions/image";
import { useSession } from "next-auth/react";

export default function ButtonUploaderDelete() {
    const { data } = useSession();
    const userData = JSON.parse(JSON.stringify(data?.user));

    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        try {
            const r = await imageRemove({
                email: userData?.email,
                imageKey: userData.image.url,
                image: userData.image,
            });
            router.refresh
        } catch (error) {
            console.log(error);
        }
    };

    return (
            <button
             type="button" 
             className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             onClick={() => handleSubmit}
             >
                Remove Image
            </button>
    );
};