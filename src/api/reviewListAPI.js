import { SET_REVIEWMODAL } from "../modules/reviewmodal";
import reviewList from "../data/reviewList.json";


export function getReviewList(page) {

    return async function (dispatch, getState) {

        dispatch({ type: SET_REVIEWMODAL, payload: reviewList });
    }
}
