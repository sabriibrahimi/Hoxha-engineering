/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b2734',
          light: '#ad3a48',
          dark: '#651923',
          muted: '#8b273420',
        },
        secondary: {
          DEFAULT: '#111a20',
          light: '#19242b',
          dark: '#0b1216',
          muted: '#253139',
        },
        surface: {
          DEFAULT: '#f3f1ed',
          warm: '#eae7e1',
          card: '#ffffff',
        },
        accent: '#f3f1ed',
        dark: '#182126',
        muted: '#687076',
        line: '#dedbd4',
        bronze: '#b79a72',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.65rem,6.4vw,5.8rem)', { lineHeight: '0.98', letterSpacing: '-0.055em', fontWeight: '650' }],
        'display-sm': ['clamp(2rem,4.5vw,4rem)', { lineHeight: '1.02', letterSpacing: '-0.045em', fontWeight: '650' }],
      },
      boxShadow: {
        'premium': '0 4px 24px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
        'premium-lg': '0 20px 60px -20px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
        'dark': '0 20px 60px -20px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
    },
  },
  plugins: [],
};
