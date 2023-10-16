import React from 'react';
import PageIntro from '../components/PageIntro';

const ProcessPage = () => {
   return (
      <PageIntro eyebrow='Our process' title='How we work' centered={false}>
         <p>
            We believe in efficiency and maximizing our resources to provide the
            best value to our clients. The primary way we do that is by re-using
            the same five projects we’ve been developing for the past decade.
         </p>
      </PageIntro>
   );
};

export default ProcessPage;
