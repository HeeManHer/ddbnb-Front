import { combineReducers } from 'redux';
import petMomReducer from './petMom';
import petSitterReducer from './petSitter';
import applicantsReducer from './applycant';
import pageReducer from "./currentPage";
import userReportReducer from "./userReport";



const rootReducer = combineReducers({
    petMomReducer, petSitterReducer, applicantsReducer, pageReducer, userReportReducer
});

export default rootReducer;