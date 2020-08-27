import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';

const App = () => (
  <main>
    <NavBar />
    {/* your routes here */}
  </main>
);

ReactDOM.render(<App />, document.getElementById('root'));
