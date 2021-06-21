import {QuestionActionTypes} from './question.types';

export const setFetchedQuestionsToStateXenatus=questions=>({
    type:QuestionActionTypes.SET_FETCHED_QUESTIONS_TO_STATE_XENATUS,
    payload:questions
})

export const setSelectedQuestionXenatus=num=>({
    type:QuestionActionTypes.SET_SELECTED_QUESTION_XENATUS,
    payload:num-1
})

export const setSelectedAnswerXenatus=num=>({
    type:QuestionActionTypes.SET_SELECTED_ANSWER_XENATUS,
    payload:num
})

export const selectedQuestionNextXenatus=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_NEXT_XENATUS,
    payload:num+1
})

export const selectedQuestionPreviousXenatus=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_PREVIOUS_XENATUS,
    payload:num-1
})

// export const setRecentFetchedTime=time=>({
//     type:QuestionActionTypes.SET_RECENT_FETCHED_TIME,
//     payload:time
// })