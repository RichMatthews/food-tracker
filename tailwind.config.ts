import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html,css}"],
  theme: {},
  plugins: [require("tailwindcss-animate")],
}

export default config
