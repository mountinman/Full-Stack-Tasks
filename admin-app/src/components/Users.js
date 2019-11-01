import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      s: "",
      user: {}
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
  componentWillReceiveProps = (nextProps) => {
    this.setState(
      {
        users: nextProps.users,
        filteredUsers: nextProps.users
      },
      () => this.filterList()
    );
  };
  searchList = (e) => {
    const s = e.target.value.toLowerCase();
    this.setState({ s }, () => this.filterList());
  };
  filterList = () => {
    let users = this.state.users;
    let s = this.state.s;

    users = users.filter(user => {
      return user.name.toLowerCase().indexOf(s) !== -1;
    });
    this.setState({ filteredUsers: users });
  };
  openDetails = id => {
    let user = this.state.filteredUsers.find((user) => {
      return user.id === id;
    });
    this.setState({user: user})
    console.log(this.state.user)
  }
 

  renderTableData = () => {
    return this.state.filteredUsers.map((user, index) => {
      const { id, name, username, email } = user;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td
            data-toggle="modal"
            data-target="#exampleModal"
            style={{ cursor: "pointer" }}
            onClick={() => this.openDetails(id)}
          >
            {name}
          </td>
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
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.state.user.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
