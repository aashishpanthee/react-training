const child = React.createElement('div', { id: 'child' }, [
  React.createElement('h1', { id: 'heading' }, 'Hello World'),
  React.createElement('h2', { id: 'heading2' }, 'Hello World2'),
  React.createElement('div', { id: 'child3' }, [
    React.createElement('h1', { id: 'heading' }, 'Hello World'),
    React.createElement('h2', { id: 'heading2' }, 'Hello World2'),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(child);
