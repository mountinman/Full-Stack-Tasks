import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Todo from "./components/Todo";
import Users from "./components/Users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/todo" exact component={Todo} />
          <Route path="/users" exact component={Users} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
