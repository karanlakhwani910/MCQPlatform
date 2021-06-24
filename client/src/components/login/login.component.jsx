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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  required1: {
    color: "white",
  },
}));

const Login = ({ history }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const eventRef = useRef(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var [severity, setSeverity] = React.useState(""); //success,error,warning,info
  var [message, setMessage] = React.useState(""); //change message
  const [eventname, setEventname] = React.useState("");
  const onClickFunction = (e) => {
    // console.log("event ref value is",eventRef.current.value,"eventName is",eventname)
    e.preventDefault();
    axios
      .post(`http://api.xeniamcq.co.in/${eventname}/login`, {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "Success") {
          setSeverity("success");
          setMessage(res.data.message);
          handleClick();
          if (eventname === "couchPotato") {
            var link =
              "/" + eventname + "/selection/" + res.data.currentToken + "/";
          } else {
            var link = "/" + eventname + "/quiz/" + res.data.currentToken + "/";
          }
          console.log(link);

          history.push(link);
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

  const handleChange = (event) => {
    setEventname(event.target.value);
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
        <div>
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">
              Event-Name
            </InputLabel>
            <Select
              ref={eventRef}
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={eventname}
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"couchPotato"}>Couch Potato</MenuItem>
              <MenuItem value={"c2c"}>Campus-To-Corporate</MenuItem>
              <MenuItem value={"xenatus"}>XeNatus</MenuItem>
              <MenuItem value={"circuitron"}>Circuitron</MenuItem>
            </Select>
            <FormHelperText className={classes.required1}>
              Required
            </FormHelperText>
          </FormControl>
        </div>
        <Button
          variant="dark"
          size="md"
          type="submit"
          className="buttonStyle"
          onClick={(e) => onClickFunction(e)}
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
