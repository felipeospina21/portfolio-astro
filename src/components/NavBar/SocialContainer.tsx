import React from 'react';
import { RiLinkedinLine, RiGithubLine } from 'react-icons/ri';

export function SocialContainer(): JSX.Element {
  return (
    <div className='mx-1 flex w-20 justify-evenly'>
      <a href='https://www.linkedin.com/in/felipe-ospina-webdev/' rel='noreferrer' target='_blank'>
        <RiLinkedinLine className='h-6 w-6 text-primary-contrast' />
      </a>
      <a href='https://github.com/felipeospina21' rel='noreferrer' target='_blank'>
        <RiGithubLine className='h-6 w-6 text-primary-contrast' />
      </a>
    </div>
  );
}
