import { Key } from 'react';
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { fetchFarmers } from '@/actions/farmer';

export default async function CardFarmer() {
  const farmers = await fetchFarmers() as any;

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20">
      {farmers.map((item: any) => (
        <li
          key={item.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img alt="" src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'} className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" />
            <h3 className="mt-6 text-md font-medium text-gray-900">{item.farm_name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              {/* <Link href=''><dd className="text-sm text-gray-500">Details</dd></Link> */}
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <Link href={`/details/farmer/${item._id}`}>
                <span className="inline-flex items-center rounded-full bg-[#7A3A30] px-2 py-1 text-sm font-medium text-white ring-1 ring-inset ring-green-600/20">
                  Details
                </span>
                </Link>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${item.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${item.phone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
