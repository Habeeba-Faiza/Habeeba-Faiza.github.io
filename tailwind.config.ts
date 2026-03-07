/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium neutral palette
        slate: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d9d9d9',
          400: '#717171',
          500: '#4a4a4a',
          600: '#2d2d2d',
          700: '#1a1a1a',
          800: '#0f0f0f',
          900: '#000000',
        },
        // Brand primary dark blue
        primary: {
          50: '#f0f4f9',
          100: '#e1e9f3',
          200: '#c3d3e7',
          300: '#a5bddb',
          400: '#8ba7cf',
          500: '#6d90c3',
          600: '#4a65a3',
          700: '#354b78',
          800: '#1f2e4d',
          900: '#0a1422',
        },
        // Accent colors
        accent: {
          teal: '#0ea5a5',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1a1a',
            a: {
              color: '#4a65a3',
              '&:hover': {
                color: '#354b78',
              },
            },
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in',
        slideUp: 'slideUp 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
