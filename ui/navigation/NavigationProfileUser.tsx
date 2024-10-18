'use client';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useSession } from "next-auth/react";
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
};

export default function NavigationProfileUser() {
  const { data, status } = useSession();

  const useProfile = `/profile/${data?.user.isFarmer ? 'farmer' : 'user'}/${data?.user._id}`;

  const navigation = [
    { name: 'Dashboard', href: `/profile/farmer/${data?.user?._id}`, current: true },
    { name: 'Products', href: `/profile/farmer/${data?.user?._id}/products`, current: false },
    { name: 'Info', href: `/profile/farmer/${data?.user?._id}/info`, current: false },
  ];

  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">

          {navigation.map((item) => status !== "loading" && (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current 
                  ? 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </Disclosure>
  )
}