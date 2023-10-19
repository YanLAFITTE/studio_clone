import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps {
   invert?: boolean;
   href?: string;
   className?: string;
   children: React.ReactNode;
   type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
   invert,
   href,
   className,
   children,
   type,
   ...props
}: ButtonProps) => {
   className = clsx(
      className,
      'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
      invert
         ? 'bg-white text-neutral-950 hover:bg-neutral-200'
         : 'text-white bg-neutral-950 hover:bg-neutral-800'
   );

   let inner = <span>{children}</span>;
   if (href) {
      return (
         <Link href={href} className={className} {...props}>
            {inner}
         </Link>
      );
   }
   return (
      <button type={type} className={className} {...props}>
         {inner}
      </button>
   );
};

export default Button;
