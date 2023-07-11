import { combineReducers } from 'redux';
import applicantsReducer from './applycant';
import messageReducer from "./message";
import pageReducer from "./currentPage";
import petMomReducer from './petMom';
import petSitterReducer from './petSitter';
import reviewmodalReducer from "./reviewmodal";
import reportReducer from "./report";
import modalsReducer from "./petSittermodal";
import petDetailReducer from "./petdetail";
import loginReducer from './LoginModule';
import reviewReducer from './ReviewModule';
import memberReducer from './MemberModule';
import momApplicantsReducer from './momApplicant';
import searchReducer from './searchValue';

const rootReducer = combineReducers({
    applicantsReducer,
    pageReducer,
    loginReducer,
    memberReducer,
    messageReducer,
    petMomReducer,
    petSitterReducer,
    reviewmodalReducer,
    reportReducer,
    petDetailReducer,
    modalsReducer,
    reviewReducer,
    memberReducer,
    momApplicantsReducer,
    searchReducer
});

export default rootReducer;