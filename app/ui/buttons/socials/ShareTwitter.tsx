'use client'
import {
    TwitterShareButton,
    TwitterIcon,
} from 'next-share';

// https://www.npmjs.com/package/next-share


export default async function ShareTwitter(data: any) {
    return (
        <TwitterShareButton
            url={`https://thefarmdirectory.com/farmer/details/${data.data}`}
            title={'Check out this farmer on The Farm Directory!'}
        >
            <TwitterIcon size={32} round />
        </TwitterShareButton>
    )
};