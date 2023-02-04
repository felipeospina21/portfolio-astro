import React from 'react';
import { AnimatedImg, SlideTitle } from '../../components';
import { techImagesProps } from './techImagesProps';

export function Skills(): JSX.Element {
  return (
    <div className='flex h-full flex-col items-center'>
      <SlideTitle>Skills</SlideTitle>
      <div className='grid h-3/4 w-2/4 grid-cols-4 items-center justify-items-center gap-8'>
        {techImagesProps.map((props) => (
          <AnimatedImg {...props} />
        ))}
      </div>
    </div>
  );
}
