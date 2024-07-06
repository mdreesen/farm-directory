'use client'
import {
    PinterestShareButton,
    PinterestIcon,
} from 'next-share'

// https://www.npmjs.com/package/next-share


export default function SharePinterest(data: any) {
    return (
        <PinterestShareButton
            url={`https://thefarmdirectory.com/farmer/details/${data.data}`}
            media={'Check out this farmer on The Farm Directory!'}
        >
            <PinterestIcon size={32} round />
        </PinterestShareButton>
    )
};