'use client'
import { useEffect, useState } from 'react';
import { Location } from '@/app/lib/locationServices/Location';

export default function EnableLocationService() {

    const [isEnabled, setIsEnabled] = useState(false)

    useEffect(() => {
        const localStorageLocationEnabled = localStorage.getItem("Location Enabled") === 'true';
        setIsEnabled(localStorageLocationEnabled)
    }, []);

    return isEnabled ? <span>Location Services Enabled</span> : <button className="bg-blue-500 text-center hover:bg-blue-600 text-white p-2 rounded" onClick={Location}>Enable Location Service</button>
};