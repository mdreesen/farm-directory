'use client';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, Cog6ToothIcon } from '@heroicons/react/20/solid'
import { useSession } from "next-auth/react";
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
};

export default function NavigationProfile() {
  const { data, status } = useSession();

  const useProfile = `/profile/${data?.user.isFarmer ? 'farmer' : 'user'}/${data?.user._id}`;

  const navigation = [
    { name: 'Account', href: `/profile/farmer/${data?.user?._id}/account`, current: false },
    { name: 'Dashboard', href: `/profile/farmer/${data?.user?._id}`, current: true },
    { name: 'Filter Settings', href: `/profile/farmer/${data?.user?._id}/filter`, current: true },
    { name: 'Info', href: `/profile/farmer/${data?.user?._id}/info`, current: false },
    { name: 'Products', href: `/profile/farmer/${data?.user?._id}/products`, current: false },
  ];

  const settings = (
    <Menu as="div" className="relative inline-block text-left content-center">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <Cog6ToothIcon aria-hidden="true" className="-mr-1 size-5 text-gray-500" />
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        // transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {navigation.map((item: any) => status !== "loading" && (
            <MenuItem>
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                {item.name}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )

  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-end">

          {settings}

        </div>
      </div>
    </Disclosure>
  )
}