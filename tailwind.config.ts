import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Custom Küchenseele colors
        wood: {
          50: '#fdf8f3',
          100: '#f7e6d3',
          200: '#efccaa',
          300: '#e5a876',
          400: '#d4834a',
          500: '#c4682b',
          600: '#a8521f',
          700: '#8a3f1c',
          800: '#72341d',
          900: '#5e2d1a',
        },
        cream: {
          50: '#fffef7',
          100: '#fffaeb',
          200: '#fff3c6',
          300: '#ffe799',
          400: '#ffd55c',
          500: '#ffc425',
          600: '#f5a316',
          700: '#cc7c0f',
          800: '#a16110',
          900: '#835011',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'splash': {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-10deg)' },
          '50%': { opacity: '1', transform: 'scale(1.05) rotate(2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
        },
        'slice': {
          '0%': {
            transform: 'translateY(100%) skewY(10deg)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(-10%) skewY(-2deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0) skewY(0)',
            opacity: '1',
          },
        },
        'sliceText': {
          '0%': {
            transform: 'translateY(100%) skewY(10deg)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(-10%) skewY(-2deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0) skewY(0)',
            opacity: '1',
          },
        },
        'glowText': {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(0,0,0,0.2)',
          },
          '50%': {
            textShadow: '0 0 25px rgba(195, 120, 60, 0.5)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'splash': 'splash 1.2s ease-out',
        'slice': 'slice 1s ease-out forwards',
        'sliceText': 'sliceText 1.3s ease-out forwards',
        'glowText': 'glowText 3s ease-in-out infinite',
      }
    }
  },
  plugins: [animate],
} satisfies Config;
