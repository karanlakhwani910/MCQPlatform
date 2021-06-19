import {QuestionActionTypes} from './question.types';

export const setFetchedQuestionsToState=questions=>({
    type:QuestionActionTypes.SET_FETCHED_QUESTIONS_TO_STATE,
    payload:questions
})

export const setSelectedQuestion=num=>({
    type:QuestionActionTypes.SET_SELECTED_QUESTION,
    payload:num-1
})

export const setSelectedAnswer=num=>({
    type:QuestionActionTypes.SET_SELECTED_ANSWER,
    payload:num
})

export const selectedQuestionNext=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_NEXT,
    payload:num+1
})

export const selectedQuestionPrevious=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_PREVIOUS,
    payload:num-1
})

// export const setRecentFetchedTime=time=>({
//     type:QuestionActionTypes.SET_RECENT_FETCHED_TIME,
//     payload:time
// })