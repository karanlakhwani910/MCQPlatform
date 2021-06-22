import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
// import { withRouter } from "react-router-dom";

import "./couch-potato.styles.scss";

import Button from "@material-ui/core/Button";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Xenia21_Logo from "../../assets/Xenia21_Text.png";
import { setFetchedQuestionsToStateCircuitron } from "../../redux/circuitron-question/question.actions";
// import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

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
function Couchpotato({ history, match }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const data = [
    { Series: "GOT", id: 1 },
    { Series: "TBBT", id: 2 },
    { Series: "Naruto", id: 1 },
    { Series: "Harry Potter", id: 1 },
    { Series: "Kota", id: 1 },
    { Series: "Suits", id: 1 },
  ];
  const [options] = useState(data);
  const seriesRef = useRef(null);
  function itemNotFour(props) {
    console.log("Not applicable");
    alert("Select 4 choices");
  }

  function itemAreFour(props) {
    console.log(seriesRef.current.getSelectedItems());
    var link = "/couchPotato/quiz/" + match.params.authToken + "/";
    var namesArray=seriesRef.current.getSelectedItems().map((item)=>{
      return item.Series
    })
    console.log(namesArray)
    history.push({
      pathname: link,
      state: { selectedSeries: namesArray }
    })
  }
  function handleToggleClick() {
    console.log(seriesRef.current.getSelectedItems());
    console.log(seriesRef.current.getSelectedItemsCount());
    console.log(seriesRef.current.getSelectedItemsCount() == 4);
    {
      seriesRef.current.getSelectedItemsCount() == 4
        ? itemAreFour()
        : itemNotFour();
    }
  }

  return (
    <Container fluid>
      <img src={Xenia21_Logo} width="200px" className="Xenia21Logo1" />
      <div class="vertical-center">
        <div>
          <Row>
            <Col lg={12} sm={12}>
              <Row>
                <Col lg={12} sm={12}>
                  <div>
                    <h3> Select Any 4 Series</h3>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12} sm={12}>
                  <div>
                    <Multiselect
                      ref={seriesRef}
                      options={options}
                      displayValue="Series"
                      selectionLimit="4"
                      className="Multiselectsytles"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12} sm={12}>
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="buttonStyle"
                      style={{ backgroundColor: "#15152D" }}
                      onClick={handleToggleClick}
                      // onClick={() => {
                      //   console.log(seriesRef.current.getSelectedItems());
                      //   console.log(seriesRef.current.getSelectedItemsCount());

                      //   var link =
                      //     "/couchPotato/quiz/" + match.params.authToken + "/";
                      //   history.push({
                      //     pathname: link,
                      //     state: {
                      //       selectedSeries:
                      //         seriesRef.current.getSelectedItems(),
                      //     },
                      //   });
                      // }}
                    >
                      Proceed
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
export default withRouter(Couchpotato);
