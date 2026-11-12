import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { candy: "#f5b51b", ink: "#241a2d" }, fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] } } },
  plugins: []
};
export default config;
