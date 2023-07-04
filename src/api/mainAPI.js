import { SET_PETMOM } from '../modules/petMom';
import { SET_PETSITTER } from '../modules/petSitter';

export function getLastedPetmom() {

    let url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petmom/list?size=3`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/* '
            }
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: SET_PETMOM, payload: result.data });
        }
    }
}

export function getLastedPetsitter() {

    let url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/petsitter/list?size=3`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: SET_PETSITTER, payload: result.data });
        }
    }
}