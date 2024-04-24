'use client';
import { useState } from 'react';

import { UserAuthenticationForm } from "./signup/UserAuthenticationForm"
import { FarmerAuthenticationForm } from "./signup/FarmerAuthenticationForm";

export function AuthenticationForm() {

    const [isChecked, setChecked] = useState();

    const handleChange = (e: any) => {
        const { checked } = e.target;
        setChecked(checked);
    };

    const toggleAuth = (
        <label className="inline-flex items-center cursor-pointer">
            <span className="me-3 text-sm font-medium text-center" dangerouslySetInnerHTML={{ __html: "I'm looking for farm products" }} />
            <input type="checkbox" value={isChecked} onChange={handleChange} className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#B78C69]" />
            <span className="ms-3 text-sm font-medium text-center" dangerouslySetInnerHTML={{ __html: "I'm a farm/farm service provider" }} />
        </label>
    )

    return (
        <div>
            <div className='flex justify-center'>{toggleAuth}</div>
            {isChecked ? <FarmerAuthenticationForm /> : <UserAuthenticationForm />}
        </div>
    );
};