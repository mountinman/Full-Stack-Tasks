import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderTableData() {
    return this.state.users.map((user, index) => {
      const { id, name, username, email } = user;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    console.log(this.state.users);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <table id="users">
          <tbody>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
        <button onClick={this.renderTableHeader.bind(this)}>Click</button>
      </div>
    );
  }
}

export default User;
