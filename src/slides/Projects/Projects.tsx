import React, { useRef } from 'react';
import { SlideTitle, Container, VisibilityTransition } from '../../components';
import { useInView } from 'framer-motion';

export function Projects(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <Container ref={ref}>
      {isInView ? (
        <VisibilityTransition>
          <SlideTitle>Projects</SlideTitle>
        </VisibilityTransition>
      ) : null}
    </Container>
  );
}
