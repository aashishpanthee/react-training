import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => {
  return <h2>Hello world 2</h2>;
};
const Child = () => (
  <div>
    <h1>Hello world 1</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Child />);
