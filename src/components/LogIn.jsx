import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import UserModal from "./CreateUserModal/UserModal";
import { useHistory } from "react-router-dom";

function LogIn({ logIn, isLogIn }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = value => setIsOpen(value);
  const logUp = () => setIsOpen(true);

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

  useEffect(() => {
    if (isLogIn) {
      history.push("/app");
    }
  }, [isLogIn]);

  
  return (
    <React.Fragment>
      <UserModal isOpen={isOpen} closeModal={closeModal} />
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
        <div style={{ width: "50%" }}>
          <Button
            color="secondary"
            size="large"
            onClick={LogInSubmit}
            style={{ width: "50%" }}
          >
            Log In
          </Button>
          <Button
            color="secondary"
            size="large"
            type="submit"
            onClick={logUp}
            style={{ width: "50%" }}
          >
            sign up
          </Button>
        </div>
      </div>
    </React.Fragment>
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

const mapStateToProps = state => {
  return {
    isLogIn: state.AuthReducer.isLogIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: (email, password) => {
      dispatch({
        type: "LOGIN_REQUEST",
        credentions: { email: email, password: password }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
