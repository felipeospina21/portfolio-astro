import AnimatedDiv from './AnimatedDiv';
import VisibilityTransition from './VisibilityTransition';

export function Intro() {
  return (
    <>
      <AnimatedDiv>
        <VisibilityTransition>
          <h1 className='text-8xl font-black'>Felipe Ospina</h1>
        </VisibilityTransition>
        <VisibilityTransition>
          <h3 className='text-2xl my-6'>Front-End Dev</h3>
        </VisibilityTransition>
      </AnimatedDiv>

      <VisibilityTransition>
        <a
          href='http://api.whatsapp.com/send?phone=573148871629'
          rel='noreferrer'
          target='_blank'
          className='bg-primary-contrast text-text-main font-bold py-2 px-5 rounded-md font-sans'
        >
          Conversemos
        </a>
      </VisibilityTransition>
    </>
  );
}
