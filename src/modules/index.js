import { combineReducers } from 'redux';
import applicantsReducer from './applycant';
import messageReducer from "./message";
import pageReducer from "./currentPage";
import petMomReducer from './petMom';
import petSitterReducer from './petSitter';
import reviewmodalReducer from "./reviewmodal";
import userReportReducer from "./userReport";
import modalsReducer from "./petSittermodal";
import petDetailReducer from "./petdetail";
import loginReducer from './LoginModule';


const rootReducer = combineReducers({
    applicantsReducer,
    messageReducer,
    pageReducer,
    petMomReducer,
    petSitterReducer,
    reviewmodalReducer,
    userReportReducer,
    petDetailReducer, 
    loginReducer, 
    modalsReducer
});

export default rootReducer;