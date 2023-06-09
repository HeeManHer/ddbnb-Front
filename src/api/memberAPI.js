import { SET_APPLICANT } from "../modules/applycant";
import applicantsList from "../data/applicantsList.json";
import applicantsList2 from "../data/applicantsList2.json";

export function getApplicantsList(page) {

    return async function (dispatch, getState) {
        if (page === 1) {
            dispatch({ type: SET_APPLICANT, payload: applicantsList });
        } else if (page === 2) {
            dispatch({ type: SET_APPLICANT, payload: applicantsList2 });
        }
    }
}
