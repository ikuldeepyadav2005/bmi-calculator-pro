import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        night: '#050816',
        blueGlow: '#00BFFF',
        blueAccent: '#3B82F6',
        blueSoft: '#60A5FA'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96,165,250,0.25), 0 20px 60px rgba(0,191,255,0.12)'
      }
    }
  },
  plugins: []
} satisfies Config;
