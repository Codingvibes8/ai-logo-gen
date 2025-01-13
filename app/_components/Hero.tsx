"use client"

import React, { useState, ChangeEvent } from 'react';
import Lookup from '../_data/Lookup';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
    const [logoTitle, setLogoTitle] = useState<string | undefined>(undefined);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLogoTitle(event.target.value);
    };

    return (
        <div className='flex items-center mt-20 flex-col gap-5 min-h-screen'>
            <div className='bg-blue-200 p-12 rounded-3xl'>
                <Link href={'/'} className="flex items-center gap-1">
                    <Image src={'/green-tech.svg'} alt='logo' width={40} height={40} className={'rotate-90'} />
                    <span className="text-red-950 font-serif font-extrabold text-2xl">Pix<span className='text-amber-700'>Gen</span></span>
                </Link>
                <h2 className='text-gray-700 text-5xl text-center font-bold mb-4'>{Lookup.HeroHeading}</h2>
                <h2 className='text-4xl text-gray-700 text-center font-bold mb-4'>{Lookup.HeroSubheading}</h2>
                <p className='text-lg text-gray-700 text-center'>{Lookup.HeroDesc}</p>
            </div>
            <div className='flex gap-6 w-full max-w-2xl mt-10'>
                <input
                    placeholder={Lookup.InputTitlePlaceholder}
                    className='p-3 border rounded-md w-full shadow-md text-gray-800'
                    onChange={handleInputChange}
                />
                <Link href={`/create?title=${logoTitle}`}>
                    <Button className="w-full p-6 bg-blue-700">Get Started</Button>
                </Link>
            </div>
           {/* // <Image src={'/landing.png'} width={500} height={500} alt='landing' className='w-full h-full mt-7' /> */}
        </div>
    );
};

export default Hero;
