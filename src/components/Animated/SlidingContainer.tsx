import { motion } from 'framer-motion';
import type { ContainerProps } from '../../types';

export function SlidingContainer(props: ContainerProps) {
  return (
    <motion.div
      className='flex justify-center'
      initial={{ x: -1000, scale: 0.5 }}
      animate={{ x: 0, scale: 1 }}
      transition={{
        type: 'spring',
        damping: 6,
        stiffness: 18,
      }}
    >
      {props.children}
    </motion.div>
  );
}
