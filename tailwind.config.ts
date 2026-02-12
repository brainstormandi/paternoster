import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#AB8443",
                accent: "#F3EAD6",
                background: "#FFFFFF",
                text: "#000000",
                link: "#F3EAD6",
                cta: "#059669",
            },
            backgroundImage: {
                'aurora-gradient': 'linear-gradient(120deg, #F3EAD6 0%, #AB8443 25%, #059669 50%, #AB8443 75%, #F3EAD6 100%)',
            },
            fontFamily: {
                display: ["var(--font-comfortaa)", "cursive"],
                body: ["var(--font-nunito)", "sans-serif"],
            },
            fontSize: {
                h1: "44px",
                h2: "32px",
                body: "16px",
            },
            animation: {
                "fade-in": "fadeIn 0.8s ease-out",
                "slide-up": "slideUp 0.8s ease-out",
                "slide-down": "slideDown 0.6s ease-out",
                "aurora": "aurora 15s linear infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                aurora: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
