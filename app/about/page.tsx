import React from 'react';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';

const AboutPage = () => {
   return (
      <PageIntro
         eyebrow='About us'
         title='Our strength is collaboration'
         centered={false}
      >
         <p>
            We believe that our strength lies in our collaborative approach,
            which puts our clients at the center of everything we do.
         </p>
      </PageIntro>
   );
};

export default AboutPage;
