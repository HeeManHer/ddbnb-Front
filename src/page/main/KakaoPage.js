import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callKakaoLoginAPI } from "../../api/LoginAPI";
import { useDispatch } from "react-redux";

function KakaoPage() {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("너야?");
        dispatch(callKakaoLoginAPI(code)).then(() => {
            console.log("여긴돼??");
            navigate("/", { replace: true });
        });
    }, [code, dispatch, navigate]);

    return null;
}

export default KakaoPage;


// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { callKakaoLoginAPI } from "../apis/LoginAPICalls";
// import { useDispatch, useSelector } from "react-redux";
// import Loading from '../components/commons/Loading';

// function KakaoPage() {

//     const code = new URL(window.location.href).searchParams.get('code');

//     const navigate = useNavigate();

//     const dispatch = useDispatch();

//     const loading = useSelector(state => state.loadingReducer);

//     useEffect(
//         () => {
//             dispatch(callKakaoLoginAPI(code));
//         }
//     )

//     if(!loading) {
//         return navigate("/", {replace: true});
//     }

//     return (
//         <>{{}}
//             <div style={{height: '100wh'}}>
//                 {loading && <Loading />}
//             </div>
//         </>
//     )

// }


// export default KakaoPage;