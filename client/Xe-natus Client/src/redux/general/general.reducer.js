import {GeneralActionTypes} from './general.types';

const INITIAL_STATE={
    recentFetchedTime:3600
 }
 
 const generalReducer=(state=INITIAL_STATE,action)=>{
     switch(action.type){
        case GeneralActionTypes.SET_RECENT_FETCHED_TIME:
            return{
                ...state,
                recentFetchedTime:action.payload
            }
        default:
            return state;
        
     }

 }
 
 export default generalReducer;