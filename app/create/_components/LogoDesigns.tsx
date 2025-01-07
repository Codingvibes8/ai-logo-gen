
"use client"
import React, { useState } from 'react';
import clsx from 'clsx';
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'

import Image from 'next/image'

interface LogoDesignsProps {
  onHandleInputChange: (design: { title: string; image: string }) => void;
  formData: { design?: { title: string } };
}

const LogoDesigns: React.FC<LogoDesignsProps> = ({ onHandleInputChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(formData?.design?.title);
  return (
    <div className='my-10'>
      <HeadingDesc
      title={Lookup.LogoDesignTitle}
      description={Lookup.LogoDesignDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
        {LogoDesigns.map((design: { title: string; image: string }, index: number) => (
          <div key={index}
          onClick={() => {
            setSelectedOption(design.title);
            onHandleInputChange(design);
          }}
          
          className={clsx(
            'p-1 hover:border-2 border-primary rounded-xl cursor-pointer',
            selectedOption === design.title && 'border-2 rounded-xl border-primary'
          )}>
              <Image src={design.image} alt={design.title} width={300}
               height={200}
               className='w-full rounded-xl h-[150px] object-cover'
               />

               <h2 className='text-center mt-3 font-medium text-lg'>{design.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesigns