"use client"

import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
    const { user } = useUser();

    return (
        <nav className="h-20 sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 bg-white border-b">
            <Link href={'/'} className="flex items-center gap-1">
                <Image src={'/green-tech.svg'} alt='logo' width={40} height={40} className={'rotate-90'} />
                <span className="text-red-950 font-serif font-extrabold text-2xl">Pix<span className='text-amber-700'>Gen</span></span>
            </Link>
            <div className='flex gap-3 items-center'>
                {user ? (
                    <Link href={'/dashboard'}>
                        <Button>Dashboard</Button>
                    </Link>
                ) : (
                    <Button>Get Started</Button>
                )}
                <UserButton />
            </div>
        </nav>
    );
};
