import React, { ReactNode, useState } from 'react';
import FadeIn, { FadeInStagger } from './Fadein';
import clsx from 'clsx';
import Border from './Border';

interface ListProps {
   className?: string;
   children: ReactNode;
}

interface ListItem {
   title?: string;
   children: ReactNode;
}


const List = ({ className, children }: ListProps) => {
   return (
      <FadeInStagger>
         <ul
            role='list'
            className={clsx('text-base text-neutral-600', className)}
         >
            {children}
         </ul>
      </FadeInStagger>
   );
};

export const ListItem = ({ title, children }: ListItem) => {
 
   return (
      <li className='group mt-10 first:mt-0'>
         <FadeIn>
            <Border className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden' position="top">
               {title && (
                  <strong className='font-semibold text-neutral-950'>{`${title}. `}</strong>
               )}
               {children}
            </Border>
         </FadeIn>
      </li>
   );
};

export default List;
