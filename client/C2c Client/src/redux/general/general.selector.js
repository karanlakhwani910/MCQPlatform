import {createSelector} from 'reselect';

const general=state=>state.general;
console.log(general);
export const getRecentFetchedTime=createSelector(
    [general],
    general=>general.recentFetchedTime
    
)

