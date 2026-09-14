'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface KineticHeadlineProps {
  lines: string[];
  className?: string;
  staggerDelay?: number; // in seconds
}

export function KineticHeadline({
  lines,
  className,
  staggerDelay = 0.12,
}: KineticHeadlineProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediately set visible as fallback to guarantee words show up
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    if (typeof IntersectionObserver !== 'undefined' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.01 }
      );

      observer.observe(containerRef.current);
      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className={cn('flex flex-col', className)}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-visible py-1 md:py-2">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block text-current drop-shadow-md"
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

