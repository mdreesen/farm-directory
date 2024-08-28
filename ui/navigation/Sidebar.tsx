'use client';
import Link from "next/link";
import { useSession } from "next-auth/react";

import {
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    const { data } = useSession();
    console.log(data)

    const navigation = [
        { name: 'Dashboard', href: `/profile/farmer/${data?.user._id}`, icon: HomeIcon },
        { name: 'Products', href: `/profile/farmer/${data?.user._id}/products`, icon: UsersIcon },
        { name: 'Info', href: `/profile/farmer/${data?.user._id}/info`, icon: FolderIcon },
    ]

    return (
        <div className='fixed w-[32%]'>
            <div className="flex grow flex-col gap-y-5 bg-indigo-600 px-2 h-[100vh]">
                <div className="flex h-16 shrink-0 items-center"></div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={classNames('group flex gap-x-3 rounded-md p-2 text-[0.775rem] font-semibold leading-6 text-white')}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames('h-6 w-6 shrink-0')}
                                            />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="-mx-6 mt-auto">
                            <span aria-hidden="true" className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700">{data?.user.farm_name}</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
