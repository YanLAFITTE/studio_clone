import React, { ReactNode } from 'react';
import FadeIn, { FadeInStagger } from './Fadein';
import clsx from 'clsx';
import Border from './Border';

interface GridListProps {
   className?: string;
   children: ReactNode;
}

interface GridListItemProps {
   title?: string;
   children: ReactNode;
   className?: string;
   invert?: boolean;
}
export function GridList({ className, children }: GridListProps) {
   return (
      <FadeInStagger>
         <ul
            role='list'
            className={clsx(
               'grid gri-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
               className
            )}
         >
            {children}
         </ul>
      </FadeInStagger>
   );
}

export function GridListItem({
   title,
   children,
   className,
   invert = false,
}: GridListItemProps) {
   return (
      <li
         className={clsx(
            'text-base',
            invert
               ? 'text-neutral-300 before:bg-white after:bg-white/10'
               : 'text-neutral-600 before:bg-neutral-950 after:bg-neutral-100',
            className
         )}
      >
         <FadeIn>
            <Border position='left' className='pl-8' invert={invert}>
               <strong
                  className={clsx(
                     'font-semibold',
                     invert ? 'text-white' : 'text-neutral-950'
                  )}
               >
                  {title}.
               </strong>{' '}
               {children}
            </Border>
         </FadeIn>
      </li>
   );
}
