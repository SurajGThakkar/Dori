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
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'gold': '0 10px 15px -3px rgba(153, 101, 21, 0.2), 0 4px 6px -2px rgba(153, 101, 21, 0.1)',
        'rose': '0 10px 15px -3px rgba(196, 30, 58, 0.15), 0 4px 6px -2px rgba(196, 30, 58, 0.1)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.15)',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      backdropBlur: {
        'md': '12px',
        'lg': '16px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(to right, #D4AF37, #996515, #D4AF37)',
        'gradient-rose': 'linear-gradient(to right, #FF6B81, #C41E3A, #FF6B81)',
        'gradient-primary': 'linear-gradient(to bottom, #4A4A4A, #2A2A2A)',
        'gradient-light': 'linear-gradient(to bottom, #FFFFFF, #F5F5F5)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(240,240,240,0.4) 100%)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'slideUp': 'slideUp 0.4s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
      },
    },
  },
  plugins: [],
};