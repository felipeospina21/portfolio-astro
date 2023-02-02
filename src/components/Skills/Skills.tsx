import React from 'react';

export function Skills(): JSX.Element {
  return (
    <div className='flex h-full flex-col items-center'>
      <h3 className='mt-2 mb-4 text-4xl'>Skills</h3>
      <div className='grid w-2/4 grid-cols-4 items-center justify-items-center gap-8'>
        <img src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' width='60' />
        <img src='https://cdn.worldvectorlogo.com/logos/redux.svg' width='60' />
        <img src='https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg' width='60' />
        <img src='https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' width='60' />
        <img src='https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg' width='60' />
        <img src='https://testing-library.com/img/octopus-128x128.png' width='60' />
        <img
          src='https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'
          width='60'
        />
        <img src='https://cdn.worldvectorlogo.com/logos/next-js.svg' width='60' />

        <img src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' width='60' />
        <img src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' width='60' />
        <img src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' width='60' />
        <img src='https://cdn.worldvectorlogo.com/logos/git-icon.svg' width='60' />
      </div>
    </div>
  );
}
