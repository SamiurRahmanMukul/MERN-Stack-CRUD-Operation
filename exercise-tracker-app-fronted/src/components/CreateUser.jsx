import axios from "axios";
import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      userName: this.state.username,
    };

    console.log(user);

    axios
      .post("https://mern-curd-app.herokuapp.com/api/v1/users", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.setState({
      username: "",
    });

    setTimeout(() => {
      window.location.href = "/create";
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary mt-2" />
          </div>
        </form>
      </div>
    );
  }
}
