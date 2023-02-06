import React from 'react';
import type { HTMLAttributes, DetailedHTMLProps, ForwardedRef } from 'react';

type ContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Container = React.forwardRef(
  (props: ContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className='flex h-full flex-col items-center'>
        {props.children}
      </div>
    );
  }
);
