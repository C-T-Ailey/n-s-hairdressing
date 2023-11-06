import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'nicki-green-deep': '#7e976d',
        'nicki-pink-deep': '#b98894',
        'nicki-green-pale': '#afbea4',
        'nicki-pink-pale': '#d3b5bc',
        'nicki-grey-dark': '#606060',
      },
    },
  },
  plugins: [],
}
export default config
