'use client';
import { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FunnelIcon } from '@heroicons/react/20/solid';
import { useSession } from "next-auth/react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchFarmerFilter() {
    const { data } = useSession();
    const userData = data?.user;

    const renderFilter =
    userData?._id &&
    userData?.address_city &&
    userData?.address_street &&
    userData?.address_state &&
    userData?.address_zip;

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [isChecked, setIsChecked] = useState(false);
    const [isArrChecked, setArrChecked] = useState([]) as any;

    const filters = {
        Location: [
            { value: userData?.address_city, label: 'City', urlLabel: 'city', checked: isChecked },
            { value: userData?.address_zip, label: 'Zip Code', urlLabel: 'zip_code', checked: isChecked },
            { value: userData?.address_state, label: 'State', urlLabel: 'state', checked: isChecked },
        ],
    };

    function handleSearch({ value, urlLabel, checked, index }: any) {
        setIsChecked(checked);

        const params = new URLSearchParams(searchParams);
        if (value && checked) {
            params.set(urlLabel, value);
            params.set('page', '1'); // Set the second query parameter
            setArrChecked([...isArrChecked, value]);
        } else {
            params.delete(urlLabel);
            setArrChecked(isArrChecked.filter((id: string) => id !== value));
        };
        replace(`${pathname}?${params.toString()}`);
    };

    // Must be logged in to view filter and have address filled out
    return renderFilter && (
        <Disclosure
            as="section"
            aria-labelledby="filter-heading"
            className="grid items-center border-b border-gray-200"
        >
            <h2 id="filter-heading" className="sr-only">
                Filters
            </h2>
            <div className="relative col-start-1 row-start-1 py-4">
                <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                    <div>
                        <DisclosureButton className="group flex items-center font-medium text-gray-700">
                            <FunnelIcon
                                aria-hidden="true"
                                className="mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"
                            />
                            {isArrChecked.length} {isArrChecked.length === 1 ? 'Filter' : 'Filters'}
                        </DisclosureButton>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="border-t border-gray-200 py-10">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                    <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                        <fieldset>
                            <legend className="block font-medium">Location</legend>
                            <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                {filters.Location.map((option, optionIdx) => (
                                    <div key={`${option.value}-${optionIdx}`} className="flex items-center text-base sm:text-sm">
                                        <input
                                            defaultValue={option.value as string}
                                            defaultChecked={option.checked}
                                            onChange={(e) => {
                                                handleSearch({ value: e.target.value, urlLabel: option.urlLabel, checked: e.target.checked, index: optionIdx });
                                            }}
                                            id={`${option.label}-${optionIdx}`}
                                            name="price[]"
                                            type="checkbox"
                                            className="size-4 shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}