import Container from './components/Container';
import FadeIn from './components/Fadein';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Clients from './components/clients';
import logoPhobiaDark from './images/clients/phobia/logo-dark.svg';

export default function Home() {
   return (
      <main className='text-black'>
         <Container className='mt-24 sm:mt-64'>
            <FadeIn className='max-w-3xl'>
               <h1 className='font-display text-5xl  font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
                  Make your online presence a reality with us!
               </h1>
               <p className='mt-6 text-xl text-neutral-600'>
                  We are a group of developer working at the intersection of
                  design and technology. It is really busy intersection though -
                  a lot of our staff have been involved in hit and runs.
               </p>
            </FadeIn>
         </Container>
         <Clients />
         <Testimonials
            className='mt-24 sm:mt-32 lg:mt-40'
            client={{ name: 'Phobia', logo: logoPhobiaDark }}
         >
            The team at Studio went above and beyond with our onboarding, even
            finding a way to access the user’s microphone without triggering one
            of those annoying permission dialogs.
         </Testimonials>
         <Services />
      </main>
   );
}
