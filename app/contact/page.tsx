import React from 'react';
import PageIntro from '../components/PageIntro';
import Container from '../components/Container';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
   return (
      <>
         {' '}
         <PageIntro
            eyebrow='Contact us'
            title="Let's work together"
            centered={false}
         >
            <p>We can not wait to hear you.</p>
         </PageIntro>
         <Container className='mt-24 sm:mt-32 lg:mt-40'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
               <ContactDetails />
               <ContactForm/>
            </div>
         </Container>
      </>
   );
};

export default ContactPage;
