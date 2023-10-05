/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: " hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: " hsl(0, 0%, 75%)",
        GrayishViolet: " hsl(257, 7%, 63%)",
        VeryDarkBlue: " hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
      },
      maxWidth: {
        MobileScreen: "375px",
        DesktopScreen: "1440px",
      },
      width: {
        "6/10": "60%",
      },
      backgroundImage: {
        bgBoostDesktop: 'url("./src/assets/bg-shorten-desktop.svg")',
        bgBoostMobile: 'url("./src/assets/bg-boost-mobile.svg")',
        shortenItDesktop: 'url("./src/assets/bg-shorten-desktop.svg")',
        shortenItMobile: 'url("./src/assets/bg-shorten-mobile.svg")',
      },
    },
  },
  plugins: [],
};
