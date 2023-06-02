// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { callNaverLoginAPI } from "../apis/LoginAPICalls";

// function NaverPage() {

//     const code = new URL(window.location.href).searchParams.get('code');

//     const state = new URL(window.location.href).searchParams.get('state');

//     const NAVER_REDIRECT_URI = encodeURI('');

//     const navigate = useNavigate();

//     const dispatch = useDispatch();

//     const loginStatus = useSelector(state => state.memberReducer)

//     useEffect(
//         () => {
//             console.log('로그인시작할거임')
//             dispatch(callNaverLoginAPI(code, state));
//             console.log('로그인끝')
//             if(loginStatus) {
//                 console.log("로그인되어있다네~~")
//             } else {
//                 alert("로그인에 실패하였습니다.")
//             }
//             navigate("/");
//         }
//     )

// return (
//     <></>
// )

// }

// export default NaverPage;