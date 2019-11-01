import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      s: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({ users: response.data });
        this.setState({ filteredUsers: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillReceiveProps = nextProps => {
    this.setState(
      {
        users: nextProps.users,
        filteredUsers: nextProps.users
      },
      () => this.filterList()
    );
  };

  searchList = e => {
    const s = e.target.value.toLowerCase();
    this.setState({ s }, () => this.filterList());
  };

  filterList = () => {
    let users = this.state.users;
    let s = this.state.s;

    users = users.filter(function(user) {
      return user.name.toLowerCase().indexOf(s) !== -1; 
    });
    this.setState({ filteredUsers: users });
  };

  openDetails = (e) => {
      console.log(e.target);
  }

  renderTableData() {
    return this.state.filteredUsers.map((user, index) => {
      const { id, name, username, email } = user;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td 
          style={{cursor:'pointer'}}
          onClick={this.openDetails}>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <input
          type="text"
          placeholder="Search users"
          onChange={this.searchList}
          value={this.state.s}
        ></input>

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
      </div>
    );
  }
}

export default User;
