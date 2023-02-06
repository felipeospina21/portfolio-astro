import type { CollectionEntry } from 'astro:content';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Intro, Projects, Skills } from '../../slides';
import { ProjectCard } from '../ProjectCard';
import { Slide } from '../Slide';

interface MainViewProps {
  projects: CollectionEntry<'projects'>[];
}

function MainView({ projects }: MainViewProps): JSX.Element {
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
      {projects.map((project, idx) => {
        const id = 4 + idx;
        return (
          <Slide key={id} id={id}>
            <ProjectCard project={project} />
          </Slide>
        );
      })}
      <motion.div className='fixed left-0 right-0 bottom-32 h-1 bg-black' style={{ scaleX }} />
    </div>
  );
}

export default MainView;
