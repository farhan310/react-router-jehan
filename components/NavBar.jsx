import React from 'react';

const NavBar = () => (
  <nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/bk">>Burger King</NavLink>
    <NavLink to="/plk">Popeyes</NavLink>
    <NavLink to="/th/:adjective" activeClassName="activeTab">
      Tim Hortons
    </NavLink>
  </nav>
);

export default NavBar;
