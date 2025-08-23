"use client";
import React from 'react';
import Lottie from 'lottie-react';
import animation from '@/../public/animations/developer.json';

const DeveloperAnimation = () => {
    return (
        <div className="w-80 h-60 md:w-120 md:h-90">
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default DeveloperAnimation;
