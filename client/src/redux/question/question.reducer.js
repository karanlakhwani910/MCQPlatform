// import { QuestionAnswerSharp } from '@material-ui/icons';
import {QuestionActionTypes} from './question.types';

const INITIAL_STATE={
     questions:[],
     selectedQuestionNumber:0,
     selectedQuestion:{
         content:'',
         answers:[
            {
                id:0,
                text:""
            },
            {
                id:1,
                text:""
            },
            {
                id:2,
                text:""
            },
            {
                id:3,
                text:""
            },
         ],
         selectedAnswer:''
     },
     recentFetchedTime:3600
 }
 
 const questionReducer=(state=INITIAL_STATE,action)=>{
     switch(action.type){
        case QuestionActionTypes.SET_FETCHED_QUESTIONS_TO_STATE:
            return{
                ...state,
                questions:action.payload
            }
        case QuestionActionTypes.SET_SELECTED_QUESTION:
            return{
                ...state,
                selectedQuestion:state.questions[action.payload],
                selectedQuestionNumber:action.payload
            }
        case QuestionActionTypes.SELECTED_QUESTION_NEXT:
            return{
                ...state,
                selectedQuestion:state.questions[action.payload],
                selectedQuestionNumber:action.payload
    
            }
        case QuestionActionTypes.SELECTED_QUESTION_PREVIOUS:
            return{
                ...state,
                selectedQuestion:state.questions[action.payload],
                selectedQuestionNumber:action.payload
            }
        case QuestionActionTypes.SET_SELECTED_ANSWER:
            var Questions=state.questions;
            var question=Questions[state.selectedQuestionNumber];
            question.selectedAnswer=action.payload;
            question.marked=true;
            Questions[state.selectedQuestionNumber]=question;
            return{
                ...state,
                questions:Questions,
                selectedQuestion:{...state.selectedQuestion,selectedAnswer:action.payload,marked:true},
                
            }
        // case QuestionActionTypes.SET_RECENT_FETCHED_TIME:
        //     return{
        //         ...state,
        //         recentFetchedTime:action.payload
        //     }
        default:
            return state;
        
     }

 }
 
 export default questionReducer;