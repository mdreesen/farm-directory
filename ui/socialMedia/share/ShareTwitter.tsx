'use client'
import {
    TwitterShareButton,
    TwitterIcon,
} from 'next-share';

// https://www.npmjs.com/package/next-share


export default function ShareTwitter(data: any) {
    return (
        <TwitterShareButton
            url={`https://thefarmdirectory.com/farmer/details/${data.data}`}
            title={'Check out this farmer on The Farm Directory!'}
        >
            <TwitterIcon size={42} round />
        </TwitterShareButton>
    )
};