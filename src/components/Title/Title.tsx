import React from 'react';

export interface TitleProps extends Partial<HTMLHeadingElement> {
  text: string;
}

export function Title(props: TitleProps): JSX.Element {
  return <h3 className='mt-2 mb-4 text-4xl'>{props.text}</h3>;
}
