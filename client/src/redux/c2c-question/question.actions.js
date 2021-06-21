import {QuestionActionTypes} from './question.types';

export const setFetchedQuestionsToStateC2c=questions=>({
    type:QuestionActionTypes.SET_FETCHED_QUESTIONS_TO_STATE_C2C,
    payload:questions
})

export const setSelectedQuestionC2c=num=>({
    type:QuestionActionTypes.SET_SELECTED_QUESTION_C2C,
    payload:num-1
})

export const setSelectedAnswerC2c=num=>({
    type:QuestionActionTypes.SET_SELECTED_ANSWER_C2C,
    payload:num
})

export const selectedQuestionNextC2c=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_NEXT_C2C,
    payload:num+1
})

export const selectedQuestionPreviousC2c=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_PREVIOUS_C2C,
    payload:num-1
})

// export const setRecentFetchedTime=time=>({
//     type:QuestionActionTypes.SET_RECENT_FETCHED_TIME,
//     payload:time
// })