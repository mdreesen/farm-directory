// 'use client'
import { ScaleLoader } from 'react-spinners';

export default function LoadingScale() {
    // You can add any UI inside Loading, including a Skeleton.
    return <ScaleLoader speedMultiplier={1} height={20} loading={true} />
}