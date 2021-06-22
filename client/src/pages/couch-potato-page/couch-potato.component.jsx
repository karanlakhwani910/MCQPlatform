import React, { useState,useRef } from "react";
import { withRouter } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
// import { withRouter } from "react-router-dom";

import "./couch-potato.styles.scss";

import Button from "@material-ui/core/Button";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Xenia21_Logo from "../../assets/Xenia21_Text.png";
function Couchpotato({history,match}) {
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
                      onClick={() =>{ 
                          console.log(seriesRef.current.getSelectedItems());
                          var link = "/couchPotato/quiz/" + match.params.authToken + "/";
                          history.push({
                            pathname: link,
                            state: { selectedSeries: seriesRef.current.getSelectedItems() }
                          })
                        }}
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
