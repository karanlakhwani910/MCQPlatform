import {combineReducers} from 'redux';
import {persistReducer} from'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import questionReducer from './question/question.reducer';
import generalReducer from './general/general.reducer';

const persistConfig={
    key:'root',
    storage,
    whitelist:['user','question']
}

const rootReducer=combineReducers({
    user:userReducer,
    question:questionReducer,
    general:generalReducer
});

export default persistReducer(persistConfig ,rootReducer)