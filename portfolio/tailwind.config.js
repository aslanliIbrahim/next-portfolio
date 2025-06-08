module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-bgLight",
    "bg-bgDark",
    "text-textPrimary",
    "text-textSecondary",
    "text-textGray700",
    "text-textGray400",
    "hover:text-hoverTextGray600",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#ffffff",
        bgDark: "#121212",
        inputLight: "#f9f9f9",
        inputDark: "#1e1e1e",

        textPrimary: "#444444",
        textSecondary: "#999999",
        textGray700: "#374151",
        textGray400: "#9CA3AF",
        hoverTextGray600: "#4B5563",
      },
    },
  },
  plugins: [],
};
