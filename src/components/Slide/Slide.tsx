import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type SlideProps = {
  children: JSX.Element;
  id: number;
};
export function Slide({ id, children }: SlideProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className='flex h-screen snap-center flex-col items-center justify-center bg-home-gradient'>
      <div
        ref={ref}
        className='align-center flex h-2/3 w-full flex-col justify-around font-title text-slate-100'
      >
        {children}
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
