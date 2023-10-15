import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         borderRadius: {
            '4xl': '2.5rem',
         },
         fontFamily: {
            sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
            display: [
               ['Mona Sans', ...defaultTheme.fontFamily.sans],
               { fontVariationSettings: '"width" 125' },
            ],
         },
      },
   },
   plugins: [],
};
export default config;
