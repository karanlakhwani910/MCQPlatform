import React, { useState, useEffect, useRef } from "react";
import "./timer.styles.scss";
// import { Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  getRecentFetchedTime
} from "../../redux/general/general.selector";
import{
  setRecentFetchedTime
} from "../../redux/general/general.actions";

import styled from "styled-components";

const Timer = ({fetchedTime,setRecentFetchedTime}) => {
  const [counter, setCounter] = React.useState(fetchedTime);

  React.useEffect(() => {
    // if(counter===9)
    // {
    //   setRecentFetchedTime()
    // }
    if(counter===598)
    {
      window.location.reload();
    }
    if(counter===5)
    {
      setRecentFetchedTime(0);
    }
    if(counter===1)
    {
      setRecentFetchedTime(10);
    }
    if(counter===3599)//change later
    {
      setCounter(fetchedTime)
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <Wrapper>
      <div>
        <div className="container-xs1">
          <div className="row">
            <div className="d-lg-none  col-sm-9"></div>
            <div className="col-lg-2 col-sm-5">
              <h1 className="timer">
                {Math.floor(counter / (60 * 60))<10?("0"+(Math.floor(counter / (60 * 60)).toString())):(Math.floor(counter / (60 * 60)))}:{Math.floor((counter % (60 * 60)/60))<10?("0"+(Math.floor((counter % (60 * 60)/60)).toString())):(Math.floor((counter % (60 * 60))/60))}:{counter%60<10?("0"+(counter%60).toString()):counter%60}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .row {
    display: inline-block;
  }
  .container-xs1 {
    margin-top: -8%;
  }
  @media only screen and (min-width: 600px) {
    .container-xs1 {
      margin-top: -20%;
      margin-right: -80%;
    }
  }
  @media only screen and (max-width: 600px) {
    .timer {
      padding-top: -5%;
    }
  }
`;

const mapDispatchToProps = (dispatch) => ({
  setRecentFetchedTime:(time)=>dispatch(setRecentFetchedTime(time))

});

const mapStateToProps = createStructuredSelector({
  fetchedTime: getRecentFetchedTime,
});

export default connect(mapStateToProps,mapDispatchToProps)(Timer);
