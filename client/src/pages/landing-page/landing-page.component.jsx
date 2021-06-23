import React,{useEffect} from "react";
import {withRouter} from "react-router-dom";

import "./landing-page.styles.scss";

import Login from "../../components/login/login.component";
import Instructions from "../../components/instructions/instructions.component";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Xenia21_Logo from "../../assets/Xenia21_Text.png";
// import circuitron from "../../assets/Circuitron.png";
// import coutchpotato from "../../assets/CouchPotato.png";
// import CampusToCorporate from "../../assets/CampustoCorporate.png";
// import xeNatus from "../../assets/xeNatus.png";

function LandingPage() {
  useEffect(()=>{
    window.history.pushState(null, document.title, window.location.href); window.addEventListener('popstate', function (event){ window.history.pushState(null, document.title, window.location.href); });
})
  return (
    <div>
      {/* <Navbar className='nav-bar' variant="dark">
        <Navbar.Brand href="#home">
          Couch Potato
        </Navbar.Brand>
      </Navbar> */}

      <Container fluid>
        <img src={Xenia21_Logo} width="200px" className="Xenia21Logo1" />
        {/* <img
          src={circuitron}
          width="200px"
          className="Xenia21Logo1 circuitron1"
        /> */}
        {/* <img
          src={coutchpotato}
          width="200px"
          className="Xenia21Logo1 couchpotato"
        /> */}

        {/* <img
          src={CampusToCorporate}
          className="Xenia21Logo1 campustocorporate"
        /> */}

        {/* <img src={xeNatus} width="200px" className="Xenia21Logo1 xenatus" /> */}
        <Row>
          <Col lg={6} sm={12}>
            <Instructions />
          </Col>
          <Col lg={6} sm={12}>
            <Login />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(LandingPage);
