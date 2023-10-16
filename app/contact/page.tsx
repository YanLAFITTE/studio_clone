import React from 'react';
import PageIntro from '../components/PageIntro';

const ContactPage = () => {
   return (
      <PageIntro eyebrow='Contact us' title="Let's work together" centered={false}>
         <p>We can not wait to hear you.</p>
      </PageIntro>
   );
};

export default ContactPage;
