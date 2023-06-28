import { POST_REPORT } from '../modules/report';

export function reportPostAPI(reportreg) {
    const URL = `http://localhost:8080/api/v1/report`;

    return async function (dispatch, getState) {
        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(reportreg)
        }).then(res => res.json());

        if (result.status === 200) {
            alert(result.message);
        }

        dispatch({ type: POST_REPORT, payload: result.data });
    };
}