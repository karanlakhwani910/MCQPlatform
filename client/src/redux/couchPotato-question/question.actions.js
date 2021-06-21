import {QuestionActionTypes} from './question.types';

export const setFetchedQuestionsToStateCouchPotato=questions=>({
    type:QuestionActionTypes.SET_FETCHED_QUESTIONS_TO_STATE_COUCH_POTATO,
    payload:questions
})

export const setSelectedQuestionCouchPotato=num=>({
    type:QuestionActionTypes.SET_SELECTED_QUESTION_COUCH_POTATO,
    payload:num-1
})

export const setSelectedAnswerCouchPotato=num=>({
    type:QuestionActionTypes.SET_SELECTED_ANSWER_COUCH_POTATO,
    payload:num
})

export const selectedQuestionNextCouchPotato=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_NEXT_COUCH_POTATO,
    payload:num+1
})

export const selectedQuestionPreviousCouchPotato=num=>({
    type:QuestionActionTypes.SELECTED_QUESTION_PREVIOUS_COUCH_POTATO,
    payload:num-1
})

// export const setRecentFetchedTime=time=>({
//     type:QuestionActionTypes.SET_RECENT_FETCHED_TIME,
//     payload:time
// })