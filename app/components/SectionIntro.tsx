import React, { HTMLProps, ReactNode } from 'react';
import Container from './Container';
import FadeIn from './Fadein';
import clsx from 'clsx';

interface SectionIntroProps {
   eyebrow: string;
   title: string;
   children: ReactNode;
   smaller?: boolean;
   invert?: boolean;
}

type Props = SectionIntroProps &
   HTMLProps<HTMLDivElement> & {
      as?: React.ElementType<any> | string | undefined;
   };

const SectionIntro = ({
   eyebrow,
   title,
   children,
   smaller = false,
   invert = false,
   ...props
}: Props) => {
   const { as, ...containerProps } = props;

   return (
      <Container as={as} {...containerProps}>
         <FadeIn className='max-w-2xl '>
            <h2>
               {eyebrow && (
                  <>
                     <span
                        className={clsx(
                           'mb-6 block font-display text-base font-semibold',
                           invert ? 'text-white' : 'text-neutral-950'
                        )}
                     >
                        {eyebrow}
                     </span>
                     <span className='sr-only'> - </span>
                  </>
               )}
               <span
                  className={clsx(
                     'block font-display tracking-tight [text-wrap:balance]',
                     smaller
                        ? 'text-2xl font-semibold'
                        : 'text-[2rem] font-medium sm:text-[2.5rem] leading-[2.5rem] lg:leading-[3rem]',
                     invert ? 'text-white' : 'text-neutral-950'
                  )}
               >
                  {title}
               </span>
            </h2>
            {children && (
               <div
                  className={clsx(
                     'mt-6 text-xl leading-[2rem]',
                     invert ? 'text-neutral-300' : 'text-neutral-600'
                  )}
               >
                  {children}
               </div>
            )}
         </FadeIn>
      </Container>
   );
};

export default SectionIntro;
