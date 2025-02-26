/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2A2A2A',
          dark: '#1A1A1A',
          light: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#4A4A4A',
          light: '#F5F5F5',
          overlay: 'rgba(0, 0, 0, 0.3)',
        },
        accent: {
          rose: '#C41E3A',
          gold: '#996515',
        },
        neutral: {
          gray: '#4A4A4A',
        },
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
      },
      borderRadius: {
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      backdropBlur: {
        'md': '12px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
};