'use client'
import {
    FacebookShareButton,
    FacebookIcon,
} from 'next-share';

// https://www.npmjs.com/package/next-share


export default function ShareFacebook(data: any) {
    return (
        <FacebookShareButton
            url={`https://thefarmdirectory.com/farmer/details/${data.data}`}
            quote={'Check out this farmer on The Farm Directory!'}
            hashtag={'#thefarmdirectory'}
        >
            <FacebookIcon size={42} round />
        </FacebookShareButton>
    )
};