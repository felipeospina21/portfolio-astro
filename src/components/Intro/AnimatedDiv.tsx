import { motion } from 'framer-motion';

type AnimatedDivProps = {
  children: JSX.Element | JSX.Element[];
};

export default function AnimatedDiv({ children }: AnimatedDivProps): JSX.Element {
  const variants = {
    visible: {
      transition: {
        delay: 0.1,
      },
    },
    hidden: {
      backgroundColor: 'transparent',
      scale: [1, 1.2, 1],
    },
  };
  return (
    <motion.div
      className='flex flex-col justify-center items-center w-full h-1/3'
      variants={variants}
      initial='visible'
      animate='hidden'
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
