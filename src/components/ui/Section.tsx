import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('py-16 md:py-24', className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
