"use client"

import React, { useEffect, useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import { useSearchParams } from 'next/navigation';
import CreateLogo from '../page';

interface LogoTitleProps {
    onHandleInputChange: (value: string) => void;
    formData: { title: string; image?: string };
}

const LogoTitle: React.FC<LogoTitleProps> = ({ onHandleInputChange, formData }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onHandleInputChange(event.target.value);
    };

    return (
        <div className='my-10'>
            <HeadingDescription
                title={Lookup.LogoTitle}
                description={Lookup.LogoTitleDesc}
            />
            <input
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
            />
        </div>
    );
};
export default LogoTitle 








