import lastedPetmom from '../data/lastedPetmom.json';
import lastedPetsitter from '../data/lastedPetsitter.json';

import { SET_PETMOM } from '../modules/petMom';
import { SET_PETSITTER } from '../modules/petSitter';

// export function getLastedPetmom() {

//     return async function (dispatch, getState) {
//         dispatch({ type: SET_PETMOM, payload: lastedPetmom })
//     }
// }

// export function getLastedPetsitter() {

//     return async function (dispatch, getState) {
//         dispatch({ type: SET_PETSITTER, payload: lastedPetsitter })
//     }
// }


export function getLastedPetmom() {

    let url = `http://localhost:8080/api/v1/petmom/list?size=3`;

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

    let url = `http://localhost:8080/api/v1/petsitter/list?size=3`;

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