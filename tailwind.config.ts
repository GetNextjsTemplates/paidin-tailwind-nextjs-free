import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cause-shadow': '0px 4px 17px 0px #00000008',
        "featureShadow": "0px 72px 129px 0px #0000001a"
      },
      spacing: {
        '70%': '70%',
      },
      colors: {
        primary: "#0057ff",
        midnight_text: "#001b50",
        Lightsuccess: "#E7F8F2",
        deepSlate: "#6493ea",
      },
      fontSize: {
        86: [
          "5.375rem",
          {
            lineHeight: "1.2",
          }
        ],
      },
      backgroundImage: {
        "header": "linear-gradient(120.3deg,#d5f2ff 31.56%,hsla(0,0%,100%,0) 94.83%)",
        "testimonial-bg": "url('/images/people/bg-line.png')",
      },
      lineHeight: {
        '180': '180%',
        '140': '140%',
        '130': '130%',
      }
    },
  },
  plugins: [],
};
export default config;
