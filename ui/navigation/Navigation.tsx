'use client';
import Image from "next/image";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ButtonAuth from '@/ui/buttons/ButtonAuth';
import { useSession } from "next-auth/react";

export default function Navigation() {

    const { data, status } = useSession();

    const useProfile = `/profile/${data?.user?.isFarmer ? 'farmer' : 'user'}/${data?.user?._id}`;

    // Desktop authenticated user
    const profileUserDesktop = status === 'authenticated' ? (
        <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-10 w-10 rounded-full"
                    />
                </MenuButton>
            </div>
            <MenuItems
                //   transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <MenuItem>
                    <Link href={useProfile} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Your Profile
                    </Link>
                </MenuItem>
                {/* <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Settings
                    </a>
                </MenuItem> */}
                <MenuItem>
                    <div>
                        <ButtonAuth />
                    </div>
                </MenuItem>
            </MenuItems>
        </Menu>
    ) : <ButtonAuth />;

        // Mobile authenticated user
        const profileUserMobile = status === 'authenticated' ? (
            <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
                {/* <div className="flex-shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-10 w-10 rounded-full"
                    />
                </div> */}
                <div className="ml-3">
                    <div className="text-sm font-medium text-gray-400">{data?.user.email}</div>
                </div>
                {/* Notifications */}
                {/* <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button> */}
            </div>
            <div className="mt-3 space-y-1 px-2">
                <Link href={useProfile} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 text-white">
                    Your Profile
                </Link>
                <div>
                    <ButtonAuth />
                </div>
            </div>
        </div>
        ) : <ButtonAuth />;

    return (
        <Disclosure as="nav" className={'fixed w-full z-10'}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                    className="h-12 w-auto"
                                    src="/images/logos/logo.webp"
                                    alt="Company The Farm Directory Logo"
                                    width={360}
                                    height={74}
                                />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                                    Categories
                                </Link>
                                <Link href="/map" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                                    Map
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center">

                            {/* Profile dropdown for desktop */}
                            {profileUserDesktop}
                        </div>
                    </div>
                    <div className="-mr-2 flex sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden bg-gray-900 py-6">
                <div className="flex flex-col space-y-1 px-2 pb-3 pt-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                        Categories
                    </Link>
                    <Link href="/map" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                        Map
                    </Link>
                </div>
                {profileUserMobile}
            </DisclosurePanel>
        </Disclosure>
    )
}
