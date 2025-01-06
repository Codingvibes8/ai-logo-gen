"use client"
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
    const [logoTitle,setLogoTitle]=useState();
    return (
        <div className='flex items-center mt-20 flex-col gap-5 min-h-screen'>
            <h2 className='text-red-800 text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
            <h2 className='text-4xl text-gray-700 text-center font-bold'>{Lookup.HeroSubheading}</h2>
            <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

            <div className='flex gap-6 w-full max-w-2xl mt-10'>
                <input placeholder={Lookup.InputTitlePlaceholder}
                       className='p-3 border rounded-md w-full shadow-md'
                       onChange={(event)=>setLogoTitle(event?.target.value)}
                />
                <Link href={'/logoTitle'}>
                    <Button className="w-full p-6 bg-blue-700">Get Started</Button>
                </Link>
            </div>
            <Image src={'/landing.png'} width={500} height={500} alt='landing'
                   className='w-full h-full mt-7'
            />
        </div>
    )
}

export default Hero