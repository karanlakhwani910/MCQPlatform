import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./instructions.styles.scss";
import StopIcon from "@material-ui/icons/Stop";
function Instructions() {
  const minutes = 10;
  const noOfQuestion = 30;
  return (
    <div className="intruction-div">
      <h1>Instructions</h1>
      <p>
        <ol>
          <li>
            Ensure that you are in the MS Teams meeting for the entire duration of the test,the link
            is shared on your email.
          </li>
          <li>Your test would be auto-submitted and end at 00:00:00</li>
          <li>You will have {minutes} minutes to solve {noOfQuestion} questions</li>
          <li>
            <MenuIcon style={{ color: "white" }} /> icon can be used to navigate through the questions
          </li>
          <li>
            <StopIcon style={{ color: "rgb(78,0,220)" }} /> indicates that the question is selected
          </li>
          <li>
            <StopIcon style={{ color: "rgb(185,56,168)" }} /> indicates that the question is solved
          </li>
          <li>
            <StopIcon style={{ color: "#909fad" }} /> indicates that the question is not solved
          </li>
        </ol>
      </p>
    </div>
  );
}

export default Instructions;