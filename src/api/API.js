import { SAMPLE } from "../modules/sample";

export function setSample() {

    return async function (dispatch, getState) {

        dispatch({ type: SAMPLE, payload: "a" });
    }
}