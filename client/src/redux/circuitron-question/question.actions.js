import {QuestionActionTypes} from './question.types';

export const setFetchedQuestionsToStateCircuitron=questions=>({
    type:QuestionActionTypes.SET_FETCHED_QUESTIONS_TO_STATE_CIRCUITRON,
    payload:questions
})

export const setSelectedQuestionCircuitron=num=>({
    type:QuestionActionTypes.SET_SELECTED_QUESTION_CIRCUITRON,
    payload:num-1
})

export const setSelectedAnswerCircuitron=num=>({
    type:QuestionActionTypes.SET_SELECTED_ANSWER_CIRCUITRON,
    payload:num
})

export const selectedQuestionNextCircuitron=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_NEXT_CIRCUITRON,
    payload:num+1
})

export const selectedQuestionPreviousCircuitron=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_PREVIOUS_CIRCUITRON,
    payload:num-1
})

// export const setRecentFetchedTime=time=>({
//     type:QuestionActionTypes.SET_RECENT_FETCHED_TIME,
//     payload:time
// })