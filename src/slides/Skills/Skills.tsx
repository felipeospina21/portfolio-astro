import React from 'react';
import { AnimatedImg, SlideTitle, Container, VisibilityTransition } from '../../components';
import { techImagesProps } from './techImagesProps';

export function Skills(): JSX.Element {
  return (
    <Container>
      <SlideTitle>Skills</SlideTitle>
      <div className='grid h-3/4 w-2/4 grid-cols-4 items-center justify-items-center gap-8'>
        {techImagesProps.map((props, idx) => (
          <VisibilityTransition delay={0.6}>
            <AnimatedImg key={idx} {...props} />
          </VisibilityTransition>
        ))}
      </div>
    </Container>
  );
}
