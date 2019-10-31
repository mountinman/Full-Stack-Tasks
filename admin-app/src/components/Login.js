import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const history = useHistory();

  const handleEmailChange = e => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = e => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = e => {
    let hardcodedCred = {
      email: "email@email.com",
      password: "password123"
    };

    if (
      emailInput === hardcodedCred.email &&
      passwordInput === hardcodedCred.password
    ) {
      
      history.push("/users");
    } else {
      //bad combination
      alert("wrong email or password combination");
    }
  };
  return (
    <div className="login-page">
      <h2>Login In</h2>
      <button type="button" tabindex="0" className="btn btn-lg" data-trigger="focus" data-toggle="popover" title="User Login Data" data-content="EMAIL:email@email.com  PASSWORD:password123">Click here for credentials</button>

      <form autoComplete="off" onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={emailInput}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
