import {createSelector} from 'reselect';

const question=state=>state.c2cQuestion;

export const getQuestionsC2c=createSelector(
    [question],
    question=>question.questions
)

export const getSelectedQuestionC2c=createSelector(
    [question],
    question=>question.selectedQuestion
);

export const getSelectedQuestionAnswersC2c=createSelector(
    [getSelectedQuestionC2c],
    getSelectedQuestion=>getSelectedQuestion.answers
);

export const getSelectedQuestionNumberC2c=createSelector(
    [question],
    question=>question.selectedQuestionNumber
);

// export const getRecentFetchedTime=createSelector(
//     [question],
//     question=>question.recentFetchedTime
// );