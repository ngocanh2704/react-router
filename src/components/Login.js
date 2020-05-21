import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [state, setState] = useState({ txtUsername: "", txtPassword: "" });

  var { txtUsername, txtPassword } = state;

  const onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    //Chan auto submit
    e.preventDefault();
    if (txtUsername === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword,
        })
      );
    }
  };

  var loggedInUser = localStorage.getItem("user");
  if (loggedInUser !== null) {
    return (
      <Redirect
        to={{
          pathname: "/products",
          state: {
            form: props.location,
          },
        }}
      />
    );
  }

  return (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={onSubmit}>
          <legend>Đăng nhập để xem thông tin</legend>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="txtUsername"
              defaultValue={txtUsername}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="password"
              className="form-control"
              name="txtPassword"
              defaultValue={txtPassword}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
