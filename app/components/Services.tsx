import React from 'react';
import SectionIntro from './SectionIntro';
import Container from './Container';
import FadeIn from './Fadein';
import StylizedImage from './StylizedImage';
import imageLaptop from '../images/laptop.jpg';

const Services = () => {
   return (
      <>
         <SectionIntro
            eyebrow='Services'
            title='We help you identify, explore and respond to new opportunities.'
            className='mt-24 sm:mt-32 lg:mt-40'
         >
            <p>
               As long as those opportunities involve giving us money to
               re-purpose old projects — we can come up with an endless number
               of those.
            </p>
         </SectionIntro>
         <Container className='mt-16'>
            <div className='lg:flex lg:items-center lg:justify-end'>
               <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
                  <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
                     <StylizedImage
                        src={imageLaptop}
                        sizes='(min-width: 1024px) 41rem, 31rem'
                        className='justiy-center lg:justify-end'
                     />
                  </FadeIn>
               </div>
            </div>
         </Container>
      </>
   );
};

export default Services;
