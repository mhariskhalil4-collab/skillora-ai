/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#635BFF',
          light: '#5448C8',
        },
        ai: {
          glow: '#00F0FF',
          muted: 'rgba(0, 240, 255, 0.15)',
        },
        success: {
          DEFAULT: '#00E676',
          light: '#00C853',
        },
        surface: {
          base: 'var(--color-bg-base)',
          card: 'var(--color-bg-card)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'ai-glow': '0 0 10px rgba(0, 240, 255, 0.4), inset 0 0 5px rgba(0, 240, 255, 0.2)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
