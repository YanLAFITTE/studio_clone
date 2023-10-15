import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface OfficeProps {
   name: string;
   children: ReactNode;
   invert: boolean;
}

const Office = ({ name, children, invert = false }: OfficeProps) => {
   return (
      <address
         className={clsx(
            'text-sm not-italic',
            invert ? 'text-neutral-300' : ' text-neutral-600'
         )}
      >
         <strong className={invert ? 'text-white' : 'text-neutral-950'}>
            {name}
         </strong>
         <br />
         {children}
      </address>
   );
};

const Offices = ({ invert = false, ...props }) => {
   return (
      <ul role='list' {...props}>
         <li>
            <Office name='U.S.A' invert={invert}>
               on bay mark
               <br />
               Newtown city of Las Vegas
            </Office>
         </li>
         <li>
            <Office name='U.S.A' invert={invert}>
               13 long street
               <br />
               Downtown, Allway
            </Office>
         </li>
      </ul>
   );
};

export default Offices;
