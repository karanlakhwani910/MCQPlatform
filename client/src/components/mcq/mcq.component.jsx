import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Question from "../question/question.component";
import Answer from "../answer/answer.component";
import AnswerComponent from "../answer/answercomponentsnaphunt";
import "./mcq.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function McqComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="mcq-component">
        {/* <div className="questionStyling"> */}
        <Question className="question" />
        {/* </div> */}
        <Grid container spacing={1}>
          <div className="Leftspace">
            <Grid item xs={2}>
              <Answer />
            </Grid>
          </div>
        </Grid>

        {/* Uncomment  to replace answer option by upload file option */}
        {/* <AnswerComponent /> */}
      </div>
    </div>
  );
}
