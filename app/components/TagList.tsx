import clsx from 'clsx';
import React, { ReactNode, HTMLProps } from 'react';

interface TagListProps extends HTMLProps<HTMLUListElement> {
   children: ReactNode;
}

export function TagList({ className, children, ...rest }: TagListProps) {
   return (
      <ul role='list' className={clsx(className, 'flex flex-wrap gap-4')} {...rest}>
         {children}
      </ul>
   );
}

interface TagListItemProps extends HTMLProps<HTMLLIElement> {
   children: ReactNode;
}

export function TagListItem({ className, children, ...rest }: TagListItemProps) {
   return (
      <li
         className={clsx(
            'rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600',
            className
         )}
         {...rest}
      >
         {children}
      </li>
   );
}
