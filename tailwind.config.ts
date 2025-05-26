// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'hammer-hit': {
          '0%': { transform: 'translate(-5px, -5px) rotate(-45deg)' },
          '10%': { transform: 'translate(-12px, -12px) rotate(-60deg)' },
          '40%': { transform: 'translate(5px, 5px) rotate(-15deg)' },
          '50%': { transform: 'translate(8px, 8px) rotate(0deg)' },
          '60%': { transform: 'translate(5px, 5px) rotate(-10deg)' },
          '100%': { transform: 'translate(-5px, -5px) rotate(-45deg)' }
        }
      },
      animation: {
        'hammer-hit': 'hammer-hit 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
