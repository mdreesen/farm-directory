import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
      <div className="relative justify-center items-center w-full place-items-center">
        Welcome to The Farm Directory!
        To find farmers in your location, go ahead and input your information in the info tab or <Link href={`/profile/user/${id}/info`} className="text-[#7A3A30] underline">click here</Link>
        {/* <ButtonUploader/> */}
      </div>
  );
}
