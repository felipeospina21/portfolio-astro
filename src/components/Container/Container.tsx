import React from 'react';
import type { ForwardedRef } from 'react';
import type { ContainerProps } from '../../types';

export const Container = React.forwardRef(
  (props: ContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className='flex h-full flex-col items-center'>
        {props.children}
      </div>
    );
  }
);
