import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        Wgrow: {
          '0%': { width: '0' },
          '100%' : { width: '100%'}
        },
        Hgrow: {
          '0%': { height: '0' },
          '100%' : { height: '100%'}
        },
      },
      animation: {
        Wgrow: 'Wgrow 0.5s ease-out',
        Hgrow:'Hgrow 0.5s ease-out'
        
      }
    },
  },
  plugins: [],
};
export default config;
