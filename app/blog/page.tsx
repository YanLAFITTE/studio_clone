import React from 'react';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';

const BlogPage = () => {
   return (
      <PageIntro
         eyebrow='Blog'
         title='The latest articles and news'
         centered={false}
      >
         <p>
            Stay up-to-date with the latest industry news as our marketing teams
            finds new ways to re-purpose old CSS tricks articles.
         </p>
      </PageIntro>
   );
};

export default BlogPage;
