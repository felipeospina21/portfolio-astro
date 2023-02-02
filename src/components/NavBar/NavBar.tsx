import React from 'react';
import { Logo } from './Logo';
import { SocialContainer } from './SocialContainer';

export function NavBar(): JSX.Element {
  return (
    <div className='sticky top-0 z-20 m-0 flex h-20 w-full items-center justify-between overflow-hidden bg-home-gradient p-0'>
      <Logo />
      <SocialContainer />
    </div>
  );
}
