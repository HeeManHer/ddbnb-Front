import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_REVIEW = 'review/GET_REVIEW';
export const GET_REVIEWLIST = 'review/GET_REVIEWLIST';
export const POST_REVIEW = 'review/POST_REVIEW';
export const PUT_REVIEW = 'review/PUT_REVIEW';
export const GET_REVIEW_RALLY = 'review/GET_REVIEW_RALLY';
export const DELETE_REVIEW = 'review/DELETE_REVIEW';

const actions = createActions({
    [GET_REVIEW]:() => { },
    [GET_REVIEWLIST]:() => { },
    [POST_REVIEW]: () => { },
    [PUT_REVIEW]: () => { },
    [GET_REVIEW_RALLY]: () => { },
    [DELETE_REVIEW]: () => { }
});

const reviewReducer = handleActions(
    {
        [GET_REVIEW]:(state, {payload}) => { return payload; },
        [GET_REVIEWLIST]:(state, {payload}) => { return payload; },
        [POST_REVIEW]:(state, {payload}) => { return payload; },
        [PUT_REVIEW]:(state, {payload}) => { return payload; },
        [GET_REVIEW_RALLY]:(state, {payload}) => {return payload;},
        [DELETE_REVIEW]:(state, {payload}) => {return payload;}
    }, initialState
);

export default reviewReducer;