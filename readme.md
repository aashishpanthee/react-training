# Job of Parcel

- Makes development build of our project
- Hosts the development onto the server
- HMR (Hot Module Replacement)
- Faster Build (Caching)
- Image Optimization
- Minification of File
- Bundling
- Compressing

# JSX

- Html like syntax

# Job of Parcel

- Transpiling jsx code
- Parcel does this transpiling job with the help of external package itself which is Babel.
  # Babel
  - Babel is a popular JavaScript compiler primarily used to transform modern JavaScript (ES6+ and beyond) into backward-compatible versions for older browsers or environments that do not support the latest features. It ensures developers can use the latest JavaScript syntax and features without worrying about compatibility issues.
    Key Features of Babel:
    - Transpilation: Converts modern JavaScript (ES6, ES7, etc.) into older versions (ES5) that are compatible with older browsers.
    - Polyfills: Adds support for new global objects (like Promise) and methods not natively available in older environments.
    - Code Optimization: Minimizes and optimizes JavaScript during the build process when used with bundlers.

# React Element

const child = (

  <div id='container'>
    <h1>Hello world</h1>
    <h2>Hello </h2>
  </div>
);
- This child is React Element. This is not a div tag itself.

# React Component

i. Functional Component

- Functional Component is a normal JavaScript function which returns JSX

ii. Class based Component

# How to create a react app (template)

- Using command:
  npx create-react-app my-app-name
