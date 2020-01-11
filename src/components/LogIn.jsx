import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

function LogIn({ logIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const LogInSubmit = () => {
    if (email !== "" && password !== "") {
      logIn(email, password);
    }
  };

  return (
    <div style={style}>
      <TextField
        onChange={handleChangeEmail}
        label="Email"
        name="todo"
        type="email"
        required
        value={email}
        variant="outlined"
        color="secondary"
        style={{
          width: "50%",
          fontFamily: "cursive"
        }}
      />
      <TextField
        onChange={handleChangePassword}
        label="Password"
        name="todo"
        type="password"
        required
        value={password}
        variant="outlined"
        color="secondary"
        style={{
          width: "50%",
          fontFamily: "cursive"
        }}
      />
      <div>
        <Button color="secondary" size="large" onClick={LogInSubmit}>
          Log In
        </Button>
        <Button color="secondary" size="large" type="submit">
          Log Up
        </Button>
      </div>
    </div>
  );
}

const style = {
  width: "100%",
  height: "255px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center"
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: (email, password) => {
      dispatch({ type: "LOGIN_REQUEST", credentions: {email: email, password: password} });
    },
    logUp: () => {
      dispatch({ type: "LOGUP_REQUEST" });
    }
  };
};

export default connect(null, mapDispatchToProps)(LogIn);
