module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#fca311',
          500: '#fca311',
        },
      },
    },
    
  },
  // plugins: [
  //   require('preline/plugin'),
  // ],
};
