'use client';
import { useReducedMotion, MotionConfig, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useId, useRef, useState } from 'react';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';

interface MyProps {
   children?: ReactNode;
}

// Define the type for the Header component's props
interface HeaderProps {
    panelId: string;
    invert?: boolean;
    icon: ReactNode;
    expanded: boolean;
    onToggle: () => void;
    toggleRef: React.RefObject<any>; // Adjust the type as needed
 }

const Header = ({
   panelId,
   invert = false,
   icon: Icon,
   expanded,
   onToggle,
   toggleRef,
}: HeaderProps) => {
   return (
      <Container >
         <div>
            <Link href={"/"} aria-label='Home'>
               <Logo  >Studio_Clone</Logo>
            </Link>
         </div>
      </Container>
   );
};

const RootLayoutInner = ({ children }: MyProps) => {
   const panelId = useId();
   const [expanded, setExpanded] = useState(false);
   const openRef = useRef();
   const closeRef = useRef();
   const navRef = useRef();
   const shouldReduceMotion = useReducedMotion();
   useEffect(() => {
      function onClick(event: MouseEvent) {
         const target = event.target as HTMLElement | null;

         if (target && target.closest('a')?.href === window.location.href) {
            setExpanded(false);
         }
      }

      // Attach the event listener
      window.addEventListener('click', onClick);

      // Cleanup the event listener when the component unmounts
      return () => {
         window.removeEventListener('click', onClick);
      };
   }, []);
   return (
      <MotionConfig
         transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
         <header>
            <div
               className='absolute left-0 right-0 top-2 z-40 pt-14 '
               aria-hidden={expanded ? 'true' : undefined}
               data-inert={expanded ? '' : undefined}
            >
                <Header/>
            </div>
         </header>
      </MotionConfig>
   );
};

const RootLayout = ({ children }: MyProps) => {
   const pathName = usePathname();
   return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
