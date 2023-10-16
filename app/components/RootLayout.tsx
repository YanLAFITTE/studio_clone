'use client';
import { useReducedMotion, MotionConfig, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, {
   ElementType,
   ReactNode,
   useEffect,
   useId,
   useRef,
   useState,
} from 'react';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import Button from './Button';
import clsx from 'clsx';
import Offices from './Offices';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

interface ChildrenProps {
   children?: ReactNode;
}

interface HeaderProps {
   panelId: string;
   invert?: boolean;
   icon: ElementType;
   expanded: boolean;
   onToggle: () => void;
   toggleRef: React.RefObject<HTMLButtonElement | null>;
}

interface NavigationItemProps {
   href: string;
   children: React.ReactNode;
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
      <Container className=''>
         <div className='flex items-center justify-between'>
            <Link href={'/'} aria-label='Home'>
               <Logo invert={invert} className='' href=''>
                  Studio_Clone
               </Logo>
            </Link>
            <div className='flex items-center gap-x-8'>
               <Button href={'/contact'} invert={invert} className=''>
                  Contact us
               </Button>
               <button
                  ref={toggleRef as React.RefObject<HTMLButtonElement>}
                  type='button'
                  onClick={onToggle}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  className={clsx(
                     'group -m-2.5 rounded-full p-2.5 transition',
                     invert ? 'hover:bg-white/10' : ' hover:bg-neutral-950/10'
                  )}
                  aria-label='Toggle navigation'
               >
                  <Icon
                     className={clsx(
                        'h-6 w-6',
                        invert
                           ? 'fill-white group-hover:fill-neutral-200'
                           : 'fill-neutral-950 group-hover:fill-neutral-700'
                     )}
                  />
               </button>
            </div>
         </div>
      </Container>
   );
};

const NavigationRow = ({ children }: ChildrenProps) => {
   return (
      <div className='even:mt-px sm:bg-neutral-950'>
         <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2'>{children}</div>
         </Container>
      </div>
   );
};

const NavigationItem = ({ href, children }: NavigationItemProps) => {
   return (
      <Link
         href={href}
         className='group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16'
      >
         {children}
         <span className='absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100' />
      </Link>
   );
};

const Navigation = () => {
   return (
      <nav className='mt-px font-display text-5xl font-medium tracking-tight text-white'>
         <NavigationRow>
            <NavigationItem href={'/work'}>Our Work</NavigationItem>
            <NavigationItem href={'/about'}>About us</NavigationItem>
         </NavigationRow>
         <NavigationRow>
            <NavigationItem href={'/process'}>Our Process</NavigationItem>
            <NavigationItem href={'/blog'}>Blog</NavigationItem>
         </NavigationRow>
      </nav>
   );
};

const RootLayoutInner = ({ children }: ChildrenProps) => {
   const panelId = useId();
   const [expanded, setExpanded] = useState(false);
   const openRef = useRef<HTMLButtonElement | null>(null);
   const closeRef = useRef<HTMLButtonElement | null>(null);
   const navRef = useRef<HTMLDivElement | null>(null);
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
               <Header
                  panelId={panelId}
                  icon={HiMenuAlt4}
                  toggleRef={openRef}
                  expanded={expanded}
                  onToggle={() => {
                     setExpanded((expanded) => !expanded);
                     window.setTimeout(() =>
                        closeRef.current?.focus({ preventScroll: true })
                     );
                  }}
               />
            </div>

            <motion.div
               layout
               id={panelId}
               style={{ height: expanded ? 'auto' : '0.5rem' }}
               className='relative z-50 overflow-hidden bg-neutral-950 pt-2'
               aria-hidden={expanded ? undefined : 'true'}
               data-inert={expanded ? undefined : ''}
            >
               <motion.div layout className='bg-neutral-800'>
                  <div ref={navRef} className='bg-neutral-950 pb-16 pt-14'>
                     <Header
                        invert
                        panelId={panelId}
                        icon={IoMdClose}
                        toggleRef={openRef}
                        expanded={expanded}
                        onToggle={() => {
                           setExpanded((expanded) => !expanded);
                           window.setTimeout(() =>
                              closeRef.current?.focus({ preventScroll: true })
                           );
                        }}
                     />
                  </div>
                  <Navigation />
                  <div className='relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800'>
                     <Container>
                        <div className='grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16'>
                           <div>
                              <h2 className='font-display text-base font-semibold text-white'>
                                 Our offices
                              </h2>
                              <Offices
                                 invert
                                 className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'
                              />
                           </div>
                           <div className='sm:border-l sm:border-transparent sm:pl-16'>
                              <h2 className='font-display text-base font-semibold text-white'>
                                 Follow us
                              </h2>
                              <SocialMedia invert className='mt-6' />
                           </div>
                        </div>
                     </Container>
                  </div>
               </motion.div>
            </motion.div>
         </header>
         <motion.div
            layout
            style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
            className='relative flex flex-auto overflow-hidden bg-white pt-14'
         >
            <motion.div
               layout
               className='relative isolate flex w-full flex-col pt-9'
            >
               <main className='w-full flex-auto'>{children}</main>

               <Footer/>
            </motion.div>
         </motion.div>
      </MotionConfig>
   );
};

const RootLayout = ({ children }: ChildrenProps) => {
   const pathName = usePathname();
   return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
