import React from 'react';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src="/images/404.png"
                alt="404 not found"
                width={350}
                height={340}
                className="object-cover"
            />
        </div>
    );
}
