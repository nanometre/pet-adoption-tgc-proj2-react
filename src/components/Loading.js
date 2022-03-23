import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/images/paw-loading.json'

export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <React.Fragment>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
        </React.Fragment>
    )
}