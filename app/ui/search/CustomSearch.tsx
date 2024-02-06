'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState } from 'react';

export default function CustomSearch() {
    const [isChecked, setIsChecked] = useState(false)


    const startData = {
        state: isChecked ? 'state' : "",
        zip_code: "",
    };

    const [openDropdown, setOpenDropdown] = useState(false);
    const [formData, setFormData] = useState(startData);

    const handleChange = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    console.log(formData)

    // URLSearchParams is a Web API that provides utility methods for manipulating the URL query parameters.
    const handleSearch = useDebouncedCallback((term) => {
        console.log(term)
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleDropdown = () => {
        setOpenDropdown(true);
    }

    const handleClose = () => {
        setOpenDropdown(false);
    }

    const checkHandler = () => {
        setIsChecked(!isChecked)
      }

    return (

        <div className="flex flex-col items-center justify-center p-4">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className={`text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`} type="button" onClick={handleDropdown}>
                Filter by category
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            { /* Dropdown menu */}
            <div id="dropdown" className={`z-10 ${!openDropdown && 'hidden'} w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}>
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                </h6>
                <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                    <li className="flex items-center">
                        <input id="state" type="checkbox" name="state" onChange={checkHandler} checked={isChecked} value={formData?.state} className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            State
                        </span>
                    </li>

                    <li className="flex items-center">
                        <input id="zip_code" type="checkbox" name="zip_code" onChange={checkHandler} checked={isChecked} value={formData?.zip_code} className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Zip Code
                        </span>
                    </li>
                </ul>

                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className={`text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`} type="button" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
