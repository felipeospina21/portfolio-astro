import { AnimatedDiv, VisibilityTransition } from '../../components';

export function Intro() {
  return (
    <>
      <AnimatedDiv>
        <VisibilityTransition>
          <h1 className='text-8xl font-black'>Felipe Ospina</h1>
        </VisibilityTransition>
        <VisibilityTransition>
          <h3 className='my-6 text-2xl'>Front-End Dev</h3>
        </VisibilityTransition>
      </AnimatedDiv>

      <VisibilityTransition>
        <a
          href='http://api.whatsapp.com/send?phone=573148871629'
          rel='noreferrer'
          target='_blank'
          className='rounded-md bg-primary-contrast py-2 px-5 font-sans font-bold text-text-main'
        >
          Conversemos
        </a>
      </VisibilityTransition>
    </>
  );
}
