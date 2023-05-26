import lastedPetmom from '../data/lastedPetmom.json';
import lastedPetsitter from '../data/lastedPetsitter.json';

import { SET_PETMOM } from '../modules/petMom';
import { SET_PETSITTER } from '../modules/petSitter';

export function getLastedPetmom() {

    return async function (dispatch, getState) {
        dispatch({ type: SET_PETMOM, payload: lastedPetmom })
    }
}

export function getLastedPetsitter() {

    return async function (dispatch, getState) {
        dispatch({ type: SET_PETSITTER, payload: lastedPetsitter })
    }
}