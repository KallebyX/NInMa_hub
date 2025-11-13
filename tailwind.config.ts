import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#604E9E',
          50: '#E8E5F3',
          100: '#D1CBE7',
          200: '#A397CF',
          300: '#7563B7',
          400: '#604E9E',
          500: '#4D3E7F',
          600: '#3A2F5F',
          700: '#271F40',
          800: '#141020',
          900: '#0A0810',
        },
        secondary: {
          DEFAULT: '#6FB9A1',
          50: '#EBF6F3',
          100: '#D7EDE7',
          200: '#AFDCCF',
          300: '#87CAB7',
          400: '#6FB9A1',
          500: '#5A9A85',
          600: '#457A69',
          700: '#305B4D',
          800: '#1B3B31',
          900: '#0E1E18',
        },
        accent: {
          DEFAULT: '#F3A65A',
          50: '#FEF5EC',
          100: '#FDEBD9',
          200: '#FBD7B3',
          300: '#F9C38D',
          400: '#F7AF67',
          500: '#F3A65A',
          600: '#E08A32',
          700: '#B86E24',
          800: '#8F5318',
          900: '#66380C',
        },
      },
      fontFamily: {
        sans: ['var(--font-vagron)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
