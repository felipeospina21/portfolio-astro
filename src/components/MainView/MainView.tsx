import { motion, useScroll, useSpring } from 'framer-motion';
import { Intro, Projects, Skills } from '../../slides';
import { Slide } from '../Slide';

function MainView(): JSX.Element {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <Slide id={1}>
        <Intro />
      </Slide>
      <Slide id={2}>
        <Skills />
      </Slide>
      <Slide id={3}>
        <Projects />
      </Slide>
      <motion.div className='fixed left-0 right-0 bottom-32 h-1 bg-black' style={{ scaleX }} />
    </div>
  );
}

export default MainView;
