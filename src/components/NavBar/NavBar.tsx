import React from 'react';
import { Logo } from './Logo';
import { SocialContainer } from './SocialContainer';

export interface NavBarProps {}

export function NavBar(props: NavBarProps): JSX.Element {
  return (
    <div className='h-20 w-full bg-home-gradient flex items-center justify-between m-0 p-0 overflow-hidden sticky top-0 z-20'>
      <Logo />
      <SocialContainer />
    </div>
  );
}
