import { motion } from 'framer-motion';

type VisibilityTransitionProps = {
  children: JSX.Element | JSX.Element[];
  delay?: number;
};

export function VisibilityTransition({ children, delay }: VisibilityTransitionProps) {
  const variants = {
    visible: {
      opacity: 1,
      display: 'flex',
      transition: {
        delay: delay ?? 0.2,
        duration: 2,
        ease: 'easeInOut',
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <motion.span variants={variants} initial='hidden' animate='visible' className='my-0 mx-auto'>
      {children}
    </motion.span>
  );
}
