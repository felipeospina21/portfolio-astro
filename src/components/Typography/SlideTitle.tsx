import type { HTMLAttributes } from 'react';

export function SlideTitle(props: HTMLAttributes<HTMLHeadingElement>): JSX.Element {
  return (
    <h3 className='mt-2 mb-4 text-4xl' {...props}>
      {props.children}
    </h3>
  );
}
