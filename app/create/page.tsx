"use client"

import React, { Suspense, useState } from 'react';
import LogoTitle from './_components/LogoTitle';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LogoDesc from './_components/LogoDesc';
import LogoPalette from './_components/LogoPalette';
import LogoDesigns from './_components/LogoDesigns';
import LogoIdea from './_components/LogoIdea';
import PricingModel from './_components/PricingModel';

interface FormData {
  title: string;
  desc: string;
  palette?: string;
  design: { title: string; prompt: string };
  idea?: string;
  pricing?: string;
}
const CreateLogo: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({ title: '', desc: '', design: { title: '', prompt: '' } });

  const onHandleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  console.log(formData);

  return (
      <Suspense>
        <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
          {step === 1 && (
              <LogoTitle
                  onHandleInputChange={(v: string) => onHandleInputChange('title', v)}
                  formData={formData}
              />
          )}
          {step === 2 && (
              <LogoDesc
                  onHandleInputChange={(v: string) => onHandleInputChange('desc', v)}
                  formData={formData}
              />
          )}
          {step === 3 && (
              <LogoPalette
                  onHandleInputChange={(v: string) => onHandleInputChange('palette', v)}
                  formData={formData}
              />
          )}
          {step === 4 && (
              <LogoDesigns
                  onHandleInputChange={(design: { title: string; image: string }) => onHandleInputChange('design', JSON.stringify(design))}
                  formData={formData}
              />
          )}
          {step === 5 && (
              <LogoIdea
                  formData={formData}
                  onHandleInputChange={(v: string) => onHandleInputChange('idea', v)}
              />
          )}
          {step === 6 && (
              <PricingModel
                  formData={formData}
                  onHandleInputChange={(v: string) => onHandleInputChange('pricing', v)}
              />
          )}
          <div className='flex items-center justify-between mt-10'>
            {step !== 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  <ArrowLeft /> Previous
                </Button>
            )}
            <Button onClick={() => setStep(step + 1)}>
              <ArrowRight /> Continue
            </Button>
          </div>
        </div>
      </Suspense>
  );
};

export default CreateLogo;
