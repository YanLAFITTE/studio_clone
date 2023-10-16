import React, { ReactNode } from 'react';
import Container from './Container';
import Fadein from './Fadein';
import clsx from 'clsx';

interface PageIntroProps {
   eyebrow: string;
   title: string;
   children: ReactNode;
   centered: boolean;
}

const PageIntro = ({
   eyebrow,
   title,
   children,
   centered = false,
}: PageIntroProps) => {
   return (
      <Container className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && "text-center")}>
         <Fadein>
            <h1>
               <span className='block font-display text-base font-semibold text-neutral-950'>
                  {eyebrow}
               </span>
               <span className='sr-only'> - </span>
               <span
                  className={clsx(
                     'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl',
                     centered && 'mx-auto'
                  )}
               >
                  {title}
               </span>
            </h1>
            <div
               className={clsx(
                  'mt-6 max-w-3xl text-xl text-neutral-600',
                  centered && 'mx-auto'
               )}
            >
               {children}
            </div>
         </Fadein>
      </Container>
   );
};

export default PageIntro;
