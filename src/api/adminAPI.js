import { GET_USER_REPORT, GET_REPORTMEMBER_LIST } from "../modules/report";
import { SET_PETSITTER } from "../modules/petSitter";
import { GET_MEMBER } from "../modules/MemberModule";

export function getMemberList(page, { nickname, signDate }) {

    let url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/member?page=${page}`;
    if (nickname !== '') {
        url += `&nickname=${nickname}`;
    }
    if (signDate !== '') {
        url += `&signDate=${signDate}`;
    }

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        }).then(res => res.json());

        if (result.status == 200) {
            dispatch({ type: GET_MEMBER, payload: result.data });
        }
    }
}

export async function getMemberAmount() {

    let url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/amount`;

    return await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*'
        }
    }).then(res => res.json());
}

export async function findMemberBySignDayIsToday() {

    const today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    let url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/member?size=5&signDate=${year}-${month}-${day}`;

    return await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*'
        }
    }).then(res => res.json()).then(res => res.data);
}

export function getBoardList(category, page) {

    let url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/${category}/list?page=${page}&size=20`;

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

export function getReportList(category) {

    let url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/report?size=20&category=${category}`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: GET_REPORTMEMBER_LIST, payload: result.data });
        }
    }
}

export function getNewReport() {

    let url = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/report/today`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        }).then(res => res.json());

        if (result.status === 200) {
            dispatch({ type: GET_USER_REPORT, payload: result.data.data });
        }
    }
}

