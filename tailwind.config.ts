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
          'primary': '#2DAAB1',
          'secondary': '#141c30',
          'tertiary': '#1e2b4d',
        }
    },
  },
  plugins: [],
}
export default config
