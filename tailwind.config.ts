import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "Louis Vuitton Web",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        border: "inset 0 0 0 1px #fff",
      },
      backgroundImage: {
        "video-gradient": "linear-gradient(0deg,#000 0,transparent)",
      },
    },
  },
  plugins: [],
}
export default config
