'use client';
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data, status } = useSession();
  const userData = data?.user;

  const hasAddress =
    userData?.address_city &&
    userData?.address_state &&
    userData?.address_street &&
    userData?.address_zip;

  const formattedAddress = `${userData?.address_street} <br/>${userData?.address_city}, ${userData?.address_state} ${userData?.address_zip}`;
  const noAddressFound = (
    <div className="relative justify-center items-center w-full place-items-center">
      Welcome to The Farm Directory!
      To find farmers in your location, go ahead and input your information in the info tab or <Link href={`/profile/user/${id}/info`} className="text-[#7A3A30] underline">click here</Link>
      {/* <ButtonUploader/> */}
    </div>
  );

  const address = hasAddress ? <span dangerouslySetInnerHTML={{ __html: formattedAddress }} /> : noAddressFound;

  return (
    <div className="relative w-full">
      {status === 'authenticated' && (
        <div>
          <h3 className="text-2xl font-bold leading-tight">Address</h3>
          {address}
        </div>
      )}
    </div>
  );
}
