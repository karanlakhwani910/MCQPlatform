import React from "react";

import "./thankyou-page.styles.scss";
import styled from "styled-components";
import Xenia21_Logo from "../../assets/Xenia21_Text.png";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

// import Login from "../../components/login/login.component";
// import Instructions from "../../components/instructions/instructions.component";
import { Container, Row, Col, Navbar } from "react-bootstrap";

function ThankyouPage({ location }) {
  return (
    <Wrapper>
      <div id="paddingStyle" className="container-fluid1">
        <div className="overlay">
          <img src={Xenia21_Logo} width="200px" className="Xenia21Logo" />

          <div className="thankyouStyling">
            <Typography variant="h1" className="thankyou-heading">
              Thank You!
            </Typography>
          </div>
          <div className="thankyouStyling">
            {/* <Typography variant="h3" className="subheading">
              lorem ipsom dolor sit amet
            </Typography> */}
            <Typography variant="h3" className="subheading">
              Your score is {location.state.score}
            </Typography>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  html {
    overflow: hidden;
  }
  .Xenia21Logo {
    margin-top: -10%;
    width: 280px;
    height: 150px;
  }
  .EventNameLogo {
    margin-top: -15%;
  }

  .subheading {
    margin: -10% 20%;
  }
  @media only screen and (min-width: 600px) {
    .Xenia21Logo {
      margin-top: -2%;
      width: 280px;
      height: 150px;
    }
    .EventNameLogo {
      margin-top: -5%;
    }
  }
  @media only screen and (max-width: 600px) {
    .Xenia21Logo {
      margin-bottom: -10%;
    }
    .EventNameLogo {
      margin-top: -10%;
      margin-bottom: -20%;
    }
    .thankyouStyling {
      margin: 50% auto;
    }
    .thankyou-heading {
      font-size: 70px;
    }
    .subheading {
      margin: -30% 20%;
      font-size: 35px;
    }
  }
  .MuiTypography-h1 {
    font-family: Fenix;
  }
`;
export default withRouter(ThankyouPage);
