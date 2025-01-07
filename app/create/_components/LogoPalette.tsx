

"use client"
import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

interface LogoPaletteProps {
  onHandleInputChange: (value: string) => void;
  formData: {
    palette?: string;
  };
}

function LogoPalette({ onHandleInputChange, formData }: LogoPaletteProps) {

  const [selectedOption, setSelectedOption] = useState<string | undefined>(formData?.palette);
  return (
    <div className='my-10'>
      <HeadingDesc
       title={Lookup.LogoColorPaletteTitle}
       description={Lookup.LogoColorPaletteDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {Colors.map((palette, index: number) => (
          <div
            className={`flex p-1 cursor-pointer ${
              selectedOption === palette.name && 'border-2 rounded-lg border-primary'
            }`}
            key={index}
          >
            {palette?.colors.map((color: string, colorIndex: number) => (
              <div className='h-24 w-full'
              key={colorIndex}
              onClick={() => {
                setSelectedOption(palette.name);
                onHandleInputChange(palette.name);
              }}
              style={{
                backgroundColor:color
              }}>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoPalette