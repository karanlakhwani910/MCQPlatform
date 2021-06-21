import {createSelector} from 'reselect';

const question=state=>state.couchPotatoQuestion;

export const getQuestionsCouchPotato=createSelector(
    [question],
    question=>question.questions
)

export const getSelectedQuestionCouchPotato=createSelector(
    [question],
    question=>question.selectedQuestion
);

export const getSelectedQuestionAnswersCouchPotato=createSelector(
    [getSelectedQuestionCouchPotato],
    getSelectedQuestion=>getSelectedQuestion.answers
);

export const getSelectedQuestionNumberCouchPotato=createSelector(
    [question],
    question=>question.selectedQuestionNumber
);

// export const getRecentFetchedTime=createSelector(
//     [question],
//     question=>question.recentFetchedTime
// );