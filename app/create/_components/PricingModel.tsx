

"use client"
import React, { useEffect } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '../../_data/Lookup'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

interface PricingModelProps {
    formData?: {
        title?: string;
    };
}

const PricingModel: React.FC<PricingModelProps> = ({ formData }) => {

    const {user}=useUser();
    useEffect(() => {
        if (formData?.title && typeof window !== 'undefined') {
            localStorage.setItem('formData', JSON.stringify(formData));
        }
    }, [formData]);

  return (
    <div className=''>
        <HeadingDesc
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
            {Lookup.pricingOption.map((pricing: { icon: string; title: string; button: string; features: string[] }, index: number) => (
                <div key={index} className="flex flex-col items-center p-5 border rounded-xl">
                    <Image
                        src={pricing.icon}
                        alt={pricing.title}
                        width={60}
                        height={60}
                    />
                    <h2 className="font-medium text-2xl">{pricing.title}</h2>
                    <div>
                        {pricing.features.map((feature: string, index: number) => (
                            <h2 className="text-lg mt-3" key={index}>
                                {feature}
                            </h2>
                        ))}
                    </div>
                    {user ? (
                        <Link href={'/generate-logo?type=' + pricing.title}>
                            <Button className="mt-5">{pricing.button}</Button>
                        </Link>
                    ) : (
                        <SignInButton mode="modal" forceRedirectUrl={'/generate-logo?type=' + pricing.title}>
                            <Button className="mt-5">{pricing.button}</Button>
                        </SignInButton>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default PricingModel;