import React, { useRef } from "react";
import Logo from "../../assets/logo.png";
import "./login.styles.scss";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
// import CustomizedSnackbars from "../alert/alert.component";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Login = ({ history }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var [severity, setSeverity] = React.useState(""); //success,error,warning,info
  var [message, setMessage] = React.useState(""); //change message
  const onClickFunction = () => {
    axios
      .post("http://localhost:3001/c2c/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "Success") {
          setSeverity("success");
          console.log(severity);
          setMessage(res.data.message);
          console.log(message);
          handleClick();
          var link = "/quiz/" + res.data.currentToken;
          console.log(link);
          setTimeout(() => history.push(link), 2000);
        }
        if (res.data.status === "Error") {
          setSeverity("error");
          setMessage(res.data.message);
          handleClick();
        }
      })
      .catch(function (error) {
        console.log("an error has occurred : ", error);
      });
  };

  // useEffect(()=>handleClick());

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="login">
      <img src={Logo} width="200px" alt="Xenia logo" />
      {/* <h2>Login</h2> */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            ref={usernameRef}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          variant="dark"
          size="md"
          type="submit"
          className="buttonStyle"
          onClick={() => onClickFunction()}
        >
          {/* <Button variant="dark" size="md" type="submit" onClick={handleClick}> */}
          Login
        </Button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </Form>
    </div>
  );
};

export default withRouter(Login);
