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

    return async function (dispatch, getState) {
        dispatch({ type: GET_MEMBER_LIST, payload: memberList });
    }
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

