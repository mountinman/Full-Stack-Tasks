import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
        <div className="ui secondary pointing menu">
            <Link to="/users" className="item">TodoApp</Link>
            <div className="right menu">
            <Link to="/users" className="item">Users</Link>
            <Link to="/todo" className="item">Todo</Link>
            <Link to="/" className="item">Logout</Link>

            </div>
        </div>
  );
}

export default NavBar;
