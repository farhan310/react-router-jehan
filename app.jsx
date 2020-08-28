import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import BurgerKing from './components/BurgerKing';

// dont forget to wrap everything in a BrowserRouter!
const App = () => (
  <BrowserRouter>
    <main className="container">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/bk" component={BurgerKing} />
      <Route path="/plk" component={Popeyes} />
      <Route path="/th/:adjective" component={TimHortons} />
    </main>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
