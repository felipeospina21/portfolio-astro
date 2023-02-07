import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion';
import { useRef } from 'react';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type SlideProps = {
  children: JSX.Element;
  id: number;
};
export function Slide({ id, children }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className='m-auto flex h-screen snap-center flex-col items-center justify-center bg-home-gradient'>
      <div
        ref={ref}
        className='align-center flex h-2/3 w-full flex-col justify-around overflow-hidden font-title text-slate-100'
      >
        {isInView ? children : null}
      </div>
      <motion.h2
        style={{ y }}
        className='absolute bottom-10 left-[calc(50%_+_130px)] text-6xl font-bold tracking-tight'
      >
        {`#00${id}`}
      </motion.h2>
    </section>
  );
}
