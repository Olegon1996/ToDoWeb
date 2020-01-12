import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function UserModal({ isOpen, closeModal, logUp, isLogIn }) {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangePassword = e => setPassword(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangeName = e => setName(e.target.value);

  const handleClose = () => {
    closeModal(false);
    setPassword("");
    setEmail("");
    setName("");
  };

  const logUpSubmit = () => {
    if (email !== "" && password !== "") {
      logUp(email, password, name);
    }
  };

  useEffect(() => {
    if(isLogIn){
      history.push('app')
    }
  },[isLogIn])
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
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
                width: "90%",
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
                width: "90%",
                fontFamily: "cursive"
              }}
            />
            <TextField
              onChange={handleChangeName}
              label="Name"
              name="name"
              type="text"
              required
              value={name}
              variant="outlined"
              color="secondary"
              style={{
                width: "90%",
                fontFamily: "cursive"
              }}
            />
            <Button
              color="secondary"
              size="large"
              type="submit"
              onClick={logUpSubmit}
              style={{ width: "90%" }}
            >
              sign up
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLogIn: state.AuthReducer.isLogIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logUp: (email, password, name) =>
      dispatch({
        type: "LOGUP_REQUEST",
        credentions: { email: email, password: password, name: name }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    outline: "none",
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 2),
    display: "flex",
    flexDirection: "column",
    height: "40vh",
    width: "81%",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});
