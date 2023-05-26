import userReport from "../data/userReport.json";
import { GET_USER_REPORT } from "../modules/userReport";


export function getUserReport() {

    return async function (dispatch, getState) {
        dispatch({ type: GET_USER_REPORT, payload: userReport });
    }
}