import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import RootLayout from './components/RootLayout';

export const metadata: Metadata = {
   title:{
      template: "studio_clone",
      default: "Studio_Clone - An award winner website clone"
   },
   description: 'Studio_Clone is an award winner website clone',
};
const mona = localFont({ src: './fonts/Mona-Sans.woff2' });

export default function Layout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='en'>
         <body className={mona.className}>
            <RootLayout>{children}</RootLayout>
         </body>
      </html>
   );
}
