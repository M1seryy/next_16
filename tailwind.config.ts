import type { Config } from 'tailwindcss'

// tailwind config
const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './src/*.html',
    ],
    theme: {
        screens: { sm: '768px', md: '1024px', lg: '1360px' },
        extend: {
        }
    },
    darkMode: 'class',
    plugins: [],
}

export default config
