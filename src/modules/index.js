import { combineReducers } from 'redux';
import petMomReducer from './petMom';
import petSitterReducer from './petSitter';
import applicantsReducer from './applycant';
import pageReducer from "./currentPage";
import userReportReducer from "./userReport";
import reviewmodalReducer from "./reviewmodal";
import petDetailReducer from "./petdetail";





const rootReducer = combineReducers({
    petMomReducer, petSitterReducer, applicantsReducer, pageReducer, userReportReducer, reviewmodalReducer, petDetailReducer
});

export default rootReducer;