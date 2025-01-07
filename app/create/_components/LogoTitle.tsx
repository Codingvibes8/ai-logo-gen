"use client"

import React, { useEffect, useState } from 'react';
import HeadingDesc from './HeadingDesc';
import Lookup from '@/app/_data/Lookup';
import { useSearchParams } from 'next/navigation';

interface LogoTitleProps {
    onHandleInputChange: (value: string) => void;
    formData: { title: string; image?: string };
}

const LogoTitle: React.FC<LogoTitleProps> = ({ onHandleInputChange, formData }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onHandleInputChange(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
            />
        </div>
    );
};

export default LogoTitle;
