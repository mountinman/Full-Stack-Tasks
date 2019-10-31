import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">TodoApp</Link>
            <div className="right menu">
            <Link to="/" className="item">Users</Link>
            <Link to="/todo" className="item">Todo</Link>
            </div>
        </div>
  );
}

export default NavBar;
