import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";

class User extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <p>User</p>
      </div>
    );
  }
}

export default User;
