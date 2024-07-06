'use client'
import {
    EmailShareButton,
    EmailIcon,
} from 'next-share'

// https://www.npmjs.com/package/next-share


export default function ShareEmail(data: any) {

    return (
        <EmailShareButton
            url={`https://thefarmdirectory.com/farmer/details/${data.data}`}
            subject={'Check out this farmer on The Farm Directory!'}
            body="body"
        >
            <EmailIcon size={32} round />
        </EmailShareButton>
    )
};