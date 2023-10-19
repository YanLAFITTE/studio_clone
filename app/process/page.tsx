import React from 'react';
import PageIntro from '../components/PageIntro';
import ContactSection from '../components/ContactSection';
import Discover from '../components/Discover';
import Build from '../components/Build';

const ProcessPage = () => {
   return (
      <>
         <PageIntro eyebrow='Our process' title='How we work' centered={false}>
            <p>
               We believe in efficiency and maximizing our resources to provide
               the best value to our clients. The primary way we do that is by
               re-using the same five projects we’ve been developing for the
               past decade.
            </p>
         </PageIntro>
         <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>
            <Discover />
            <Build/>
            {/* Deliver */}
         </div>
         {/* Values */}
         <ContactSection />
      </>
   );
};

export default ProcessPage;
