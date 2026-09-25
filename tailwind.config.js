const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.indigo.600"),
            "--tw-prose-invert-links": theme("colors.indigo.400"),
            a: {
              textDecorationColor: theme("colors.indigo.300"),
              textUnderlineOffset: "3px",
              transition: "text-decoration-color 150ms",
              "&:hover": {
                textDecorationColor: "currentColor",
              },
            },
            "h1, h2, h3, h4": {
              fontFamily: theme("fontFamily.sans").join(", "),
              letterSpacing: "-0.015em",
            },
          },
        },
        invert: {
          css: {
            a: {
              textDecorationColor: theme("colors.indigo.800"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
