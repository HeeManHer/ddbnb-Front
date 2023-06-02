import petMomDetail from '../data/petMomDetail.json';
import petSitterDetail from '../data/petSitterDetail.json';

import { SET_PETMOMDETAIL, SET_PETSITTERDETAIL } from '../modules/petdetail';

export function getPetMomDetail() {

    return async function (dispatch, getState) {
        dispatch({ type: SET_PETMOMDETAIL, payload: petMomDetail })
    }
}

export function getPetSitterDetail() {

    return async function (dispatch, getState) {
        dispatch({ type: SET_PETSITTERDETAIL, payload: petSitterDetail })
    }
}