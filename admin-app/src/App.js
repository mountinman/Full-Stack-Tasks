import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Todo from "./components/Todo";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Login}></Route>
          <Route path="/users" exact component={Users}></Route>
          <Route path="/todo" component={Todo}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
