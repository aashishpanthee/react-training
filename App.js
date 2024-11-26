import React from 'react';
import ReactDOM from 'react-dom/client';

const Homepage = () => {
  return (
    <div id='container'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};
const Navbar = () => {
  return <nav>This is Navbar</nav>;
};

const Main = () => {
  return (
    <main>
      <p>This is main section</p>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>This is footer</p>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Homepage />);
