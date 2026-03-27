/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                burgundy: {
                    DEFAULT: "hsl(var(--primary))",
                    dark: "#4a1f25",
                    light: "#7d3540",
                },
                yellow: {
                    DEFAULT: "hsl(var(--secondary))",
                    light: "#fdd84e",
                },
                offwhite: {
                    DEFAULT: "hsl(var(--background))",
                    dark: "#f0e6c8",
                },
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'slide-up': 'slide-up 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
            },
            fontFamily: {
                display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
                body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
