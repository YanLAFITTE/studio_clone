'use client';
import React, { HTMLProps, createContext, useContext } from 'react';
import { MotionProps, motion, useReducedMotion } from 'framer-motion';

type FadeinProps = HTMLProps<HTMLDivElement> & MotionProps;

type FadeInStaggerProps = {
    faster?: boolean;
  } & MotionProps;

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: '0px 0px -200px' };

const Fadein = (props: FadeinProps) => {
   const shouldReduceMotion = useReducedMotion();
   const isInStaggerGroup = useContext(FadeInStaggerContext);
   return (
      <motion.div
         variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
            visible: { opacity: 1, y: 0 },
         }}
         transition={{ duration: 0.5 }}
         {...(isInStaggerGroup
            ? {}
            : { initial: 'hidden', whileInView: 'visible', viewport })}
         {...props}
         ref={null} 
      />
   );
};

export const FadeInStagger = ({ faster = false, ...props }: FadeInStaggerProps) => {
   return (
      <FadeInStaggerContext.Provider value={true}>
         <motion.div
            initial='hidden'
            whileInView={viewport}
            transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
            {...props}
         />
      </FadeInStaggerContext.Provider>
   );
};

export default Fadein;
