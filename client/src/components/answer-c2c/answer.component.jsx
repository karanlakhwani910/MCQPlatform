import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import "./answer.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import {
  getSelectedQuestionAnswersC2c,
  getSelectedQuestionC2c,
} from "../../redux/c2c-question/question.selector";
import { setSelectedAnswerC2c } from "../../redux/c2c-question/question.actions";
import cyan from "@material-ui/core/colors/cyan";

const StyledRadio = styled(Radio)`
  color: ${cyan[400]};
  &.Mui-checked {
    color: ${cyan[600]};
  }
`;
const RadioButtonsGroup = function ({
  answersC2c,
  selectedQuestionC2c,
  setSelectedAnswerC2c,
}) {
  const selectedAnswer = selectedQuestionC2c.selectedAnswer;
  const [value, setValue] = React.useState(selectedAnswer);

  React.useEffect(() => {
    setValue(selectedAnswer);
  }, [selectedAnswer]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setSelectedAnswerC2c(event.target.value);
  };
  //{answers[0].text}
  //{answers[1].text}
  //{answers[2].text}
  //{answers[3].text}
  return (
    <Wrapper>
      <FormControl component="fieldset" className="styling vertical-center-row">
        <RadioGroup
          aria-label="options"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="0"
            control={<StyledRadio />}
            label={answersC2c[0]}
            // label="Random Option Opp tion oOO ppp Random Option Opp tion oOO ppp Option Opp tion oOO ppp Option Opp tion oOO ppp Option Opp tion oOO ppp Option Opp tion oOO ppp"
            className="FormControlLabelStyling"
          />
          <FormControlLabel
            value="1"
            control={<StyledRadio />}
            label={answersC2c[1]}
          />
          <FormControlLabel
            value="2"
            control={<StyledRadio />}
            label={answersC2c[2]}
          />
          <FormControlLabel
            value="3"
            control={<StyledRadio />}
            label={answersC2c[3]}
          />
        </RadioGroup>
      </FormControl>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  answersC2c: getSelectedQuestionAnswersC2c,
  selectedQuestionC2c: getSelectedQuestionC2c,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedAnswerC2c: (num) => dispatch(setSelectedAnswerC2c(num)),
});
const Wrapper = styled.section`
  @media only screen and (min-width: 600px) {
    .MuiFormControlLabel-label {
      font-size: 20px;
      font-family: Fenix;
    }
  }
  .MuiRadio-root {
    color: #ffffff80;
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(RadioButtonsGroup);
