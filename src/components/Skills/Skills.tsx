import React from 'react';
import { AnimatedImg } from '../Animated';
import { techImagesProps } from './techImagesProps';

export function Skills(): JSX.Element {
  return (
    <div className='flex h-full flex-col items-center'>
      <h3 className='mt-2 mb-4 text-4xl'>Skills</h3>
      <div className='grid h-3/4 w-2/4 grid-cols-4 items-center justify-items-center gap-8'>
        {techImagesProps.map((props) => (
          <AnimatedImg {...props} />
        ))}
      </div>
    </div>
  );
}
