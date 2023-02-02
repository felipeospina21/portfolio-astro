import type { HTMLMotionProps } from 'framer-motion';

const commonProps = {
  width: '60',
};

export const techImagesProps: HTMLMotionProps<'img'>[] = [
  {
    src: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
    alt: 'React Js icon',
    title: 'React Js',
    ...commonProps,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
    alt: 'Redux icon',
    title: 'Redux',
    ...commonProps,
  },
  {
    src: 'https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg',
    alt: 'Saas icon',
    title: 'Saas',
    ...commonProps,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
    alt: 'Tailwind Css icon',
    title: 'Tailwind Css',
    ...commonProps,
  },
  {
    src: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
    alt: 'Jest icon',
    title: 'Jest',
    ...commonProps,
  },
  {
    src: 'https://testing-library.com/img/octopus-128x128.png',
    alt: 'Testing Library icon',
    title: 'Testing Library',
    ...commonProps,
  },
  {
    src: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
    alt: 'Typescript icon',
    title: 'Typescript',
    ...commonProps,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
    alt: 'Next Js icon',
    title: 'Next Js',
    ...commonProps,
  },
  {
    src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
    alt: 'Node Js icon',
    title: 'Node Js',
    ...commonProps,
  },
  {
    src: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
    alt: 'Express Js icon',
    title: 'Express Js',
    ...commonProps,
  },
  {
    src: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
    alt: 'Mongo DB icon',
    title: 'Mongo DB',
    ...commonProps,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
    alt: 'Git icon',
    title: 'Git',
    ...commonProps,
  },
];
