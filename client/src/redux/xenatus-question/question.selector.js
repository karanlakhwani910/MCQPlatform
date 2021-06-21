import {createSelector} from 'reselect';

const question=state=>state.xenatusQuestion;

export const getQuestionsXenatus=createSelector(
    [question],
    question=>question.questions
)

export const getSelectedQuestionXenatus=createSelector(
    [question],
    question=>question.selectedQuestion
);

export const getSelectedQuestionAnswersXenatus=createSelector(
    [getSelectedQuestionXenatus],
    getSelectedQuestion=>getSelectedQuestion.answers
);

export const getSelectedQuestionNumberXenatus=createSelector(
    [question],
    question=>question.selectedQuestionNumber
);

// export const getRecentFetchedTime=createSelector(
//     [question],
//     question=>question.recentFetchedTime
// );