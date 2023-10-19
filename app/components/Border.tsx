import clsx from 'clsx';
import React, { ElementType, ReactNode } from 'react';

interface BorderProps {
   className?: string;
   children: ReactNode;
   position?: 'top' | 'bottom' | 'left' | 'right';
   invert?: boolean;
   as?: ElementType;
}

const Border = ({
   className,
   position = 'top',
   invert = false,
   as: Component = 'div',
   ...props
}: BorderProps) => {
   return (
      <Component
         className={clsx(
            className,
            'relative before:absolute after:absolute',
            invert
               ? 'before:bg-white after:bg-white/10'
               : 'before:bg-neutral-950 after:bg-neutral-950/10',
            position === 'top' &&
               'before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px',
            position === 'bottom' &&
               'before:left-0 before:bottom-0 before:h-px before:w-6 after:left-8 after:right-0 after:bottom-0 after:h-px '
         )}
         {...props}
      />
   );
};

export default Border;
