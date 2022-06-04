const defaultTheme = require("tailwindcss/lib/public/default-theme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins:[

  ]
}
