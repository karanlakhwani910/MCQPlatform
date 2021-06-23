//prev,next max limits hardcoded change.

import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import { createStructuredSelector } from "reselect";
import {
  setFetchedQuestionsToState,
  selectedQuestionNext,
  selectedQuestionPrevious,
  setSelectedQuestion,
  // setRecentFetchedTime
} from "../../redux/question/question.actions";
import{
  setRecentFetchedTime
} from "../../redux/general/general.actions";
import {
  getSelectedQuestion,
  getSelectedQuestionNumber,
  getQuestions
} from "../../redux/question/question.selector";
import {
  getRecentFetchedTime
} from "../../redux/general/general.selector";

import "./quiz-page.styles.scss";

//import GridComponent from "../../components/grid/grid.component";
import McqComponent from "../../components/mcq/mcq.component";
import TimerComponent from "../../components/timer-c2c/timer.component";
import Loader from "../../components/loader/loader.component";
import TemporaryDrawer from "../../components/drawer/TemporaryDrawer";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Xenia21_Logo from "../../assets/Xenia21_Text.png";
import { useEffect } from "react";
import circuitron from "../../assets/circuitron.png";
// import coutchpotato from "../../assets/CouchPotato.png";
// import CampusToCorporate from "../../assets/CampustoCorporate.png";
// import xeNatus from "../../assets/xeNatus.png";

class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted:false,
    };
  }
  componentDidMount() {
    console.log("this.props is ",this.props)
    console.log("state before setting mounted to true",this.state);
    // if(this.firstTime===false)
    // {
    //   this.firstTime=true;
    //   Location.reload(false)
      
    // }
    if(this.props.questions.length===0)
    {
      axios
        .post("http://localhost:3001/c2c/fetchQuestions")
        .then((res) => {
          console.log(res);
          // this.setState(res.data);
          this.props.setFetchedQuestionsToState(res.data);
          this.props.setSelectedQuestion(1);
          console.log("action initialised");
          this.setState({mounted:true},console.log(this.state))
        })
        .catch(function (error) {
          console.log("an error has occurred : ", error);
        });
    }
    else
    {
        this.props.setSelectedQuestion(1);
        this.setState({mounted:true},()=>console.log(this.state))
    }
    console.log(this.props);
    var link="http://localhost:3001/c2c/getTime/"+this.props.match.params.authToken
    console.log(link)
    axios
    .post(link)
    .then((res) => {
      console.log(res.data);
      if(res.data.status==="Failure")
      {
          this.props.history.push("/");
      }
      else{
        if(res.data.time<=0)
        {
          this.submit(this,this.props.questions);
        }
        this.props.setRecentFetchedTime(res.data.time)
      }
      // // this.setState(res.data);
      // this.props.setFetchedQuestionsToState(res.data);
      // this.props.setSelectedQuestion(1);
      // console.log("action initialised");
    })
    .catch(function (error) {
      console.log("an error has occurred : ", error);
    })
    if(this.props.fetchedTime<=0)
    {
        console.log("here in if of will update");
        this.submit(this,this.props.questions)
    }
    
  }

  componentWillUpdate(){
    if(this.props.fetchedTime<=0)
    {
        console.log("here in if of will update");
        this.submit(this,this.props.questions)
    }
    console.log("Fetched time in main component is",this.props.fetchedTime)

  }
  
  
  submit=(reference,response)=>{
    console.log("submit clicked")
    console.log("body while sending is",response)
    var link="http://localhost:3001/c2c/saveResponse/"+reference.props.match.params.authToken
    axios
      .post(link, response)
      .then(function (res) {
        console.log("response returned from an endpoint",res.data.score)

        reference.props.history.push({
          pathname:'/thankyou/#!',
          state:{score:res.data.score}
      });
      })
      .catch(function (error) {
        console.log("Network error raised", error);
      });
  }

  render() {
    console.log("state before rendering",this.state)
    return !this.state.mounted ?(<Loader/>):(
      <Wrapper>
        <div id="paddingStyle" className="container-fluid">
          <div className="overlay">
            <img src={Xenia21_Logo} width="200px" className="Xenia21Logo" />
            <div>
              {/* <img src={Xenia21_Logo} width="200px" className="EventNameLogo" /> */}
              <img src={circuitron} width="200px" className="EventNameLogo" />
              {/* <img src={CampusToCorporate} className="EventNameLogo" /> */}
            </div>
            <TemporaryDrawer mounted={this.state.mounted}/>
            {/* <div id="timerRow" className="row">
              {/* Instructions */}
            {/* <div className="col-lg-10 col-md-9 col-sm-2 div1"></div> */}
            {/* <div className="col-lg-2 col-md-2 col-sm-10"> */}
            {/* </div> */}
            {/* </div> */}
            <TimerComponent />
            <div className="row">
              {/* Instructions */}
              <div className="col-lg-3 col-md-2 col-sm-12 div1"></div>

              <div className="col-lg-7 col-md-10 col-sm-1">
                <McqComponent />
              </div>
            </div>
            <div className="row row2">
              <div className="col-lg-2.5 col-md-3 col-sm-11 "></div>
              <div className="col-lg-7 col-md-7 col-sm-1">
                <Wrapper>
                  <div className="row row1">
                    <ButtonGroup>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="buttonStyle"
                        onClick={() =>{
                            this.props.selectedQuestionPrevious(
                              this.props.selectedQuestionNumber
                            )
                            console.log(this.props);
                          }
                        }
                      >
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="buttonStyle"
                        onClick={()=>this.submit(this,this.props.questions)}
                      >
                        Submit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="buttonStyle"
                        onClick={()=>{
                          this.props.selectedQuestionNext(
                          this.props.selectedQuestionNumber
                        )
                        }
                      }
                      >
                        Next
                      </Button>
                    </ButtonGroup>
                  </div>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  html {
    overflow: hidden;
  }
  .Xenia21Logo{
    margin-top:-10%;
    width:250px;
    height:125px;
  }
  .EventNameLogo{
    margin-top:-15%;
    
    
  }

  .buttonStyle {
    
    margin-right: 10%;
    background: #f11794;
    border-radius:0;
    margin: 0 20px 0px -20px;
    &:hover {
      background: black;
      border: 2px solid #f11794;
      color: #f11794;
      box-shadow: 1px 1px 2px black, 0 0 45px #f11794, 0 0 5px darkblue;
    }
  }
  .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
  .row1 {
    display: revert;
    margin-left:-12%;
  }
  .row2{
    margin-top:2%;
    margin-left:7%;
  }
  .row {
    dispplay: revert;
  }
  #timerRow {
    margin-top:-12%:
    margin-right: 2%;
   
  }
  @media only screen and (min-width: 600px) {
    .Xenia21Logo{
      margin-top:-2%;
      width:250px;
      height:125px;
    }
    .EventNameLogo{
      margin-top:-3%;
      width:210px;
      height:80px;
    }
  }
  @media only screen and (max-width: 600px) {
    .Xenia21Logo{
      margin-top:0;
      margin-bottom:-10%;
      
    }
    .EventNameLogo{
      margin-top: -10%;
      margin-bottom: -20%;
     
    }
    .row1 {
      margin-left:8%;
    }
  }
`;

// @media only screen and (min-width: 600px) {
  //   .Xenia21Logo{
  //     margin-top:-2%;
  //     width:280px;
  //     height:150px;
  //   }
  //   .EventNameLogo{
  //     margin-top:-5%;
      
  //   }
  // }
  // @media only screen and (max-width: 600px) {
  //   .Xenia21Logo{
  //     margin-bottom:-10%;
      
  //   }
  //   .EventNameLogo{
  //     margin-top: -10%;
  //     margin-bottom: -20%;
      
  //   }
  // }


const mapDispatchToProps = (dispatch) => ({
  setFetchedQuestionsToState: (questions) =>
    dispatch(setFetchedQuestionsToState(questions)),
  selectedQuestionNext: (num) => {
    if(num===4)
    {

    }
    else
    {
      dispatch(selectedQuestionNext(num))
    }
  },
  selectedQuestionPrevious: (num) => {
    if(num===0)
    {

    }
    else
    {
      dispatch(selectedQuestionPrevious(num))
    }
  },
  setSelectedQuestion: (num) => dispatch(setSelectedQuestion(num)),
  setRecentFetchedTime:(time)=>dispatch(setRecentFetchedTime(time))

});

const mapStateToProps = createStructuredSelector({
  questions:getQuestions,
  selectedQuestion: getSelectedQuestion,
  selectedQuestionNumber: getSelectedQuestionNumber,
  fetchedTime:getRecentFetchedTime
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizPage));
