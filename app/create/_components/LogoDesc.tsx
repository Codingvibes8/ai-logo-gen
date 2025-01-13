
"use client"
import React from 'react'


import HeadingDesc from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

interface LogoDescProps {
  onHandleInputChange: (value: string) => void;
  formData?: { desc?: string };
}

function LogoDesc({ onHandleInputChange, formData }: LogoDescProps) {
  return (
    <div className='my-10'>
        <HeadingDesc 
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc} />

    <input type='text' placeholder={Lookup.LogoDescTitle}
        className='p-4 border rounded-lg mt-5 w-full'
         defaultValue={formData?.desc}

        onChange={(e)=>onHandleInputChange(e.target.value)}
        />
    </div>
  )
}

export default LogoDesc