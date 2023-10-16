import React from 'react';
import Container from './components/Container';
import Fadein from './components/Fadein';
import Link from 'next/link';

const NotFound = () => {
   return (
      <Container className='flex h-full items-center pt-20 sm:-pt-24 lg:pt-32'>
         <Fadein className='flex flex-col items-center'>
            <p className='font-display text-4xl font-semibold text-neutral-950'>
               404
            </p>
            <h1 className='mt-4 font-display text-2xl font-semibold text-neutral-950'>
               Page not found
            </h1>
            <p className='mt-2 text-sm text-neutral-600 [text-wrap:balance] text-center'>
               Sorry, we could not find the page you are looking for.
            </p>
            <Link
               href='/'
               className='mt-4 text-sm font-seminbold text-neutral-950 transition hover:text-neutral-700'
            >
               Go to the home page
            </Link>
         </Fadein>
      </Container>
   );
};

export default NotFound;
