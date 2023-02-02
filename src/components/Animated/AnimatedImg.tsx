import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

export function AnimatedImg(props: HTMLMotionProps<'img'>): JSX.Element {
  return (
    <motion.img
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.3, ease: 'easeInOut', times: [0, 0.2, 0.5, 0.8, 1] },
      }}
      {...props}
    />
  );
}
