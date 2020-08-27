import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';

// dont forget to wrap everything in a BrowserRouter!
const App = () => (
  <main>
    <NavBar />
    {/* your routes here */}
  </main>
);

ReactDOM.render(<App />, document.getElementById('root'));
