import type { HTMLAttributes } from 'react';
import { VisibilityTransition, SlidingContainer } from '../../components';

export function SlideTitle(props: HTMLAttributes<HTMLHeadingElement>): JSX.Element {
  return (
    <SlidingContainer>
      <VisibilityTransition>
        <h3 className='mt-2 mb-4 text-7xl uppercase' {...props}>
          {props.children}
        </h3>
      </VisibilityTransition>
    </SlidingContainer>
  );
}
