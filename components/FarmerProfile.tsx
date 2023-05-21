import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export function FarmerProfile() {

    const { user } = useUser();
    console.log(user)

    return (
        <div>Farmer Profile</div>
    );
};