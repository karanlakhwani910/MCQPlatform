import {GeneralActionTypes} from './general.types';

export const setRecentFetchedTime=time=>({
    type:GeneralActionTypes.SET_RECENT_FETCHED_TIME,
    payload:time
})