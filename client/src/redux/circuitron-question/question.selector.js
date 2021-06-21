import {createSelector} from 'reselect';

const question=state=>state.circuitronQuestion;

export const getQuestionsCircuitron=createSelector(
    [question],
    question=>question.questions
)

export const getSelectedQuestionCircuitron=createSelector(
    [question],
    question=>question.selectedQuestion
);

export const getSelectedQuestionAnswersCircuitron=createSelector(
    [getSelectedQuestionCircuitron],
    getSelectedQuestion=>getSelectedQuestion.answers
);

export const getSelectedQuestionNumberCircuitron=createSelector(
    [question],
    question=>question.selectedQuestionNumber
);

// export const getRecentFetchedTime=createSelector(
//     [question],
//     question=>question.recentFetchedTime
// );