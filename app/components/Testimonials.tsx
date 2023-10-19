import React, { ReactNode } from 'react';
import Container from './Container';
import clsx from 'clsx';
import FadeIn from './Fadein';
import Image from 'next/image';

interface TestimonialsProps {
   children: ReactNode;
   client: { name: string; logo: string };
   className: string;
}

const Testimonials = ({ children, client, className }: TestimonialsProps) => {
   return (
      <div
         className={clsx(
            'relative isolate rounded-t-4xl bg-gradient-to-b from-neutral-50 py-16 sm:py-28 md:py-32 ',
            className
         )}
      >
         <Container>
            <FadeIn>
               <figure className='mx-auto max-w-4xl'>
                  <blockquote className='relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
                     <p className='before:content-["“"] before:px-1 after:content-["”"] after:px-1 sm:before:absolute sm:before:right-full'>
                        {children}
                     </p>
                  </blockquote>
                  <figcaption className='mt-10 '>
                     <Image src={client.logo} alt={client.name} unoptimized />
                  </figcaption>
               </figure>
            </FadeIn>
         </Container>
      </div>
   );
};

export default Testimonials;
