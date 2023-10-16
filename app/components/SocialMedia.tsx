import React, { ReactNode } from 'react';
import clsx from 'clsx';
import {
   BsFacebook,
   BsTwitter,
   BsGithub,
   BsYoutube,
   BsLinkedin,
} from 'react-icons/bs';
import Link from 'next/link';

interface SocialMediaProps {
   className: string;
   invert: boolean;
}

export const SocialMediaProfiles = [
   {
      title: 'Facebook',
      href: 'https://www.facebook.com',
      icon: BsFacebook,
   },
   {
      title: 'Twitter',
      href: 'https://www.twitter.com',
      icon: BsTwitter,
   },
   {
      title: 'Github',
      href: 'https://www.github.com',
      icon: BsGithub,
   },
   {
      title: 'Youtube',
      href: 'https://www.youtube.com',
      icon: BsYoutube,
   },
   {
      title: 'Linkedin',
      href: 'https://www.linkedin.com',
      icon: BsLinkedin,
   },
];

const SocialMedia = ({ className, invert = false }: SocialMediaProps) => {
   return (
      <ul
         role='list'
         className={clsx(
            'flex gap-10',
            invert ? 'text-white' : 'text-neutral-950',
            className
         )}
      >
         {SocialMediaProfiles.map((socialMediaProfile) => (
            <li key={socialMediaProfile.title}>
               <Link
                  href={socialMediaProfile.href}
                  aria-label={socialMediaProfile.title}
                  className={clsx(
                     'transition',
                     invert
                        ? 'hover:text-neutral-200'
                        : 'hover:text-neutral-700'
                  )}
               >
                  <socialMediaProfile.icon className="h-6 w-6 fill-current"/>
               </Link>
            </li>
         ))}
      </ul>
   );
};

export default SocialMedia;
