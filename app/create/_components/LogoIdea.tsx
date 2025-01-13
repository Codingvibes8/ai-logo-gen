"use client"
import React, { useEffect, useState } from 'react'

import Lookup from '@/app/_data/Lookup'
import axios from 'axios'
import Prompt from '@/app/_data/Prompt'
import { Loader2Icon } from 'lucide-react'
import HeadingDescription from './HeadingDescription'

interface Props {
  formData: {
    idea?: string;
    title: string;
    desc: string;
    design: {
      title: string;
      prompt: string;
    };
  };
  onHandleInputChange: (value: string) => void;
}

function LogoIdea({ formData, onHandleInputChange }: Props): JSX.Element {
  const [ideas, setIdeas] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(formData?.idea);

  useEffect(() => {
    generateLogoDesignIdea();
  }, []);

  const generateLogoDesignIdea = async () => {
    setLoading(true);
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
      .replace('{logoType}', formData?.design.title)
      .replace('{logoTitle}', formData.title)
      .replace('{logoDesc}', formData.desc)
      .replace('{logoPrompt}', formData.design.prompt);

    try {
      const result = await axios.post('/api/ai-design-ideas', {
        prompt: PROMPT
      });
      console.log(result.data);
      setIdeas(result.data); // Ensure this sets the ideas state
    } catch (error) {
      console.error('Error fetching design ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoIdeaTitle}
        description={Lookup.LogoIdeaDesc}
      />
      <div className='flex items-center justify-center'>
        {loading && <Loader2Icon className='animate-spin my-10' />}
      </div>
      <div className='flex flex-wrap gap-3 mt-6'>
        {ideas && ideas.map((item, index) => (
          <h2
            key={index}
            onClick={() => {
              setSelectedOption(item);
              onHandleInputChange(item);
            }}
            className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${
              selectedOption === item && 'border-primary'
            }`}>
            {item}
          </h2>
        ))}
        <h2
          onClick={() => {
            setSelectedOption('Let AI Select the best idea');
            onHandleInputChange('Let AI Select the best idea');
          }}
          className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${
            selectedOption === 'Let AI Select the best idea' && 'border-primary'
          }`}>
          Let AI Select the best idea
        </h2>
      </div>
    </div>
  );
}

export default LogoIdea;