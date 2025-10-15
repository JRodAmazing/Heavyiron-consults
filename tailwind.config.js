@tailwind base;
@tailwind components;
@tailwind utilities;

/* --------------------------
   Global Styles + Fonts
--------------------------- */

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Inter:wght@400;600&display=swap');

:root {
  --background: #000000;
  --foreground: #ffffff;
}

html {
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
  color: var(--foreground);
  scroll-behavior: smooth;
}

h1, h2, h3, h4 {
  font-family: 'Oswald', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
