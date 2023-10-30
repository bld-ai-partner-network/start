/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bldai-primary-dark": "#403b80",
        "bldai-monochrome-grey-350": "#dbdcdf",
        "bldai-text-light-contrast": "#fff",
        "bldai-text-primary": "#253858",
        "bldai-secondary-border": "#d6d5f3",
        "bldai-primary-main": "#5c55b8",
        "bldai-primary-background": "#f9fbfe",
        "bldai-text-secondary": "#5c6983",
      },
      spacing: {},
      fontFamily: {
        buttonlarge: "Poppins",
      },
      borderRadius: {
        "2xl-3": "21.3px",
      },
    },
    fontSize: {
      mini: "0.94rem",
      xl: "1.25rem",
      "13xl": "2rem",
      xs: "0.75rem",
      "17xl": "2.25rem",
      base: "1rem",
      lg: "1.13rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
