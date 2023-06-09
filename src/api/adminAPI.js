import userReport from "../data/userReport.json";
import memberList from "../data/memberManage.json";
import petMomListManage from "../data/petMomListManage.json";
import petSitterListManage from "../data/petSitterListManage.json";
import reportPostListManage from "../data/reportPostListManage.json";
import reportMemberListManage from "../data/reportMemberListManage.json";
import { GET_USER_REPORT, GET_MEMBER_LIST, GET_PETMOM_LIST, GET_PETSITTER_LIST, GET_REPORTMEMBER_LIST, GET_REPORTPOST_LIST } from "../modules/userReport";


export function getUserReport() {

    return async function (dispatch, getState) {
        dispatch({ type: GET_USER_REPORT, payload: userReport });
    }
}

export function getMemberList() {

    let url = `http://localhost:8080/api/v1/member/list`;


    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        }).then(res => res.json());

        if (result.status == 200) {
            dispatch({ type: GET_MEMBER_LIST, payload: result.data });
        }
    }
}

export async function getMemberAmount() {

    let url = `http://localhost:8080/api/v1/member/amount`;

    return await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*'
        }
    }).then(res => res.json());
}

export async function getTodayVisitant() {

    let url = `http://localhost:8080/api/v1/member/visitant`;

    return await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*'
        }
    }).then(res => res.json());
}

export async function findMemberBySignDayIsToday() {

    let url = `http://localhost:8080/api/v1/member/signdate`;

    return await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*'
        }
    }).then(res => res.json());
}

export function getPetMomList() {

    return async function (dispatch, getState) {
        dispatch({ type: GET_PETMOM_LIST, payload: petMomListManage });
    }
}

export function getPetSitterList() {

    return async function (dispatch, getState) {
        dispatch({ type: GET_PETSITTER_LIST, payload: petSitterListManage });
    }
}

export function getReportMemberList() {

    return async function (dispatch, getState) {
        dispatch({ type: GET_REPORTMEMBER_LIST, payload: reportMemberListManage });
    }
}

export function getReportPostList() {

    return async function (dispatch, getState) {
        dispatch({ type: GET_REPORTPOST_LIST, payload: reportPostListManage });
    }
}

