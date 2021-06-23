import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import questionReducer from "./question/question.reducer";
import generalReducer from "./general/general.reducer";
import circuitronQuestionReducer from "./circuitron-question/question.reducer";
import c2cQuestionReducer from "./c2c-question/question.reducer";
import couchPotatoQuestionReducer from "./couchPotato-question/question.reducer";
import xenatusQuestionReducer from "./xenatus-question/question.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "user",
    // "circuitronQuestion",
    // "c2cQuestion",
    // "xenatusQuestion",
    // "couchPotatoQuestion",
  ],
};

const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
  circuitronQuestion: circuitronQuestionReducer,
  c2cQuestion: c2cQuestionReducer,
  xenatusQuestion: xenatusQuestionReducer,
  couchPotatoQuestion: couchPotatoQuestionReducer,
  general: generalReducer,
});

export default persistReducer(persistConfig, rootReducer);
