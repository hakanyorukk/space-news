/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        primary: {},
        accent: {},
      },
      backgroundImage: {
        event:
          "url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/soyuz_ms_in_orb_image_20240313130407.jpeg')",
      },
    },
  },
  plugins: [],
};
