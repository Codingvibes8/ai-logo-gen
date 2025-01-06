"use client"
import  { UserButton} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export function Header() {
  return (
    <nav className=" h-20 sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 bg-white border-b">
        <Link href={'/'} className="flex items-center gap-1">
            <Image src={'/logo-maker.svg'} alt='logo' width={30} height={30} className={'rotate-90'}/>
            <span className="text-red-950 font-serif font-extrabold text-2xl">PicGen</span>
        </Link>
        <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Get Started
        </button>
        <button className="p-2 rounded-full bg-gray-100">
          <UserButton/>
        </button>
      </div>
    </nav>
  )
}

