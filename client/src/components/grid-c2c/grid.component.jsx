import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { numbers } from "../../utils/number-c2c";
import { Button } from "@material-ui/core";

import { setSelectedQuestionC2c } from "../../redux/c2c-question/question.actions";
import {
  getQuestionsC2c,
  getSelectedQuestionNumberC2c,
} from "../../redux/c2c-question/question.selector";

import { createStructuredSelector } from "reselect";

const Grid = ({
  setSelectedQuestionC2c,
  questionsC2c,
  selectedQuestionNumberC2c,
  mounted,
}) => {
  return (
    <Wrapper>
      <section className="grid">
        <div className="rectangle">
          <div className="gridHeading">Questions</div>
          <div className="number-box">
            {/* <Button className="small-rectangle2">
              <h4>#1</h4>
            </Button>
            <Button className="small-rectangle-red">
              <h4>#2</h4>
            </Button>
            <Button className="small-rectangle-green">
              <h4>#3</h4>
            </Button> */}
            {numbers.map((number) => {
              const { id, num } = number;
              console.log(
                "selcted question number is",
                selectedQuestionNumberC2c === num - 1
              );
              return (
                <StyledButton
                  className="small-rectangle"
                  key={id}
                  onClick={() => setSelectedQuestionC2c(num)}
                  marked={mounted ? questionsC2c[num - 1].marked : false}
                  selected={selectedQuestionNumberC2c === num - 1}
                  style={{}}
                >
                  <h4>{num}</h4>
                </StyledButton>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.footerGrid{
  margin-top:150%;
}
  .gridHeading {
    color: white;
    font-size: 30px;
    padding-top: 10px;
    font-weight: bold;
    font-family: Fenix;
      
  }
  .grid {
    display: flex;
  }
  .rectangle {
    background: black repeat-x scroll center top transparent;
    position: absolute;
    top: 0%;
    left: 0%;
    padding-left: 0%;
    min-height: 100%;
    width: 100%;
    background:#23153c;

    clear: both;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .rectangle::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  .number-box {
    position: absolute;
    top: 2rem;
    left: 7.5%;

    justify-content: space-around;

    font-weight: bold;
  }
  
    h4 {
      margin-top: 20%;
      font-size: 2rem;
    }
  }
  .small-rectangle2 {
    background-color: var(--explorebtn);
    background-color: #f11794;
    box-shadow: 1px 1px 2px black, 0 0 20px #f11794, 0 0 5px darkblue;
    height: 62px;
    width: 65px;
    border: none;
    border-radius: 15px;
    text-align: center;
    align-item: center;
    margin-top: 11%;
    margin-left: 4%;
    &:hover {
      background: black;
      border: 4px solid #f11794;
      color: #f11794;
      box-shadow: 1px 1px 2px black, 0 0 45px #f11794, 0 0 5px darkblue;
    }
    h4 {
      margin-top: 20%;
      font-size: 2rem;
    }
  }
  .small-rectangle-red {
    background-color: var(--explorebtn);
    background-color: #909fad;
    box-shadow: 1px 1px 2px black, 0 0 20px #909fad, 0 0 5px darkblue;
    height: 62px;
    width: 65px;
    border: none;
    border-radius: 15px;
    text-align: center;
    align-item: center;
    margin-top: 11%;
    margin-left: 4%;
    &:hover {
      background: black;
      border: 4px solid #909fad;
      color: #909fad;
      box-shadow: 1px 1px 2px black, 0 0 45px #909fad, 0 0 5px darkblue;
    }
    h4 {
      margin-top: 20%;
      font-size: 2rem;
    }
  }
  .small-rectangle{
    height: 62px;
    width: 65px;
    border: none;
    border-radius: 15px;
    text-align: center;
    align-item: center;
    margin-top: 11%;
    margin-left: 4%;
    &:hover {
      background: black;
      
    }
  .small-rectangle-green {
    background-color: var(--explorebtn);
    background-color: #00ff00;
    box-shadow: 1px 1px 2px black, 0 0 20px #00ff00, 0 0 5px darkblue;
    height: 62px;
    width: 65px;
    border: none;
    border-radius: 15px;
    text-align: center;
    align-item: center;
    margin-top: 11%;
    margin-left: 4%;
    &:hover {
      background: black;
      border: 4px solid #00ff00;
      color: #00ff00;
      box-shadow: 1px 1px 2px black, 0 0 45px #00ff00, 0 0 5px darkblue;
    }
    h4 {
      margin-top: 20%;
      font-size: 2rem;
    }
  }
`;

const StyledButton = styled(Button)`
  &:not(:hover) {
    background: ${(props) =>
      props.selected ? "rgb(78,0,220)" : props.marked ? "rgb(185,56,168)" : "#909fad"};
    
  }
  &:hover {
    background: black;
    border: 4px solid
      ${(props) =>
        props.selected ? "rgb(78,0,220)" : props.marked ? "rgb(185,56,168)" : "#909fad"};
    color: ${(props) =>
      props.selected ? "rgb(78,0,220)" : props.marked ? "rgb(185,56,168)" : "#909fad"};
    box-shadow: 1px 1px 2px black,
      0 0 45px
        ${(props) =>
          props.selected ? "rgb(78,0,220)" : props.marked ? "rgb(185,56,168)" : "#909fad"},
      0 0 5px darkblue;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  setSelectedQuestionC2c: (question) => dispatch(setSelectedQuestionC2c(question)),
});

const mapStateToProps = createStructuredSelector({
  questionsC2c: getQuestionsC2c,
  selectedQuestionNumberC2c: getSelectedQuestionNumberC2c,
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
