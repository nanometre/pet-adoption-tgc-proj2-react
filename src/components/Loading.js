import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/images/paw-loading.json'

// component for loading animation
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
                height={400}
                width={400}
            />
        </React.Fragment>
    )
}