import {createSelector} from 'reselect';

const question=state=>state.question;

export const getQuestions=createSelector(
    [question],
    question=>question.questions
)

export const getSelectedQuestion=createSelector(
    [question],
    question=>question.selectedQuestion
);

export const getSelectedQuestionAnswers=createSelector(
    [getSelectedQuestion],
    getSelectedQuestion=>getSelectedQuestion.answers
);

export const getSelectedQuestionNumber=createSelector(
    [question],
    question=>question.selectedQuestionNumber
);

// export const getRecentFetchedTime=createSelector(
//     [question],
//     question=>question.recentFetchedTime
// );