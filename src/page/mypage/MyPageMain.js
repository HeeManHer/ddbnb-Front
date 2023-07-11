import style from "./MyPageMain.module.css";
import MyReviewPage from "../review/MyReviewPage";
import { useNavigate, useParams } from "react-router-dom";
import MyCardList from "../../component/list/AppliedList";
import { useEffect, useState } from "react";
import { getCurrentMember, deleteMember } from "../../api/MemberAPICalls";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import StarPoint from "../../component/item/StarPoint";
import { callNaverLogoutAPI } from "../../api/LoginAPI";

function MyPageMain() {

    //리덕스
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const member = useSelector(state => state.memberReducer);
    const {memberId} = useParams();

    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    useEffect(() => {
        dispatch(getCurrentMember(memberId));
    }, []
    );

    const handleDelete = () => {
        dispatch(deleteMember(memberId));
        dispatch(callNaverLogoutAPI());
        navigate("/", { replace: true });
    };

    //성별 구분
    const genderSet = () => {
        if (member.gender === "M" || member.gender === "male") {
            return (
                <AiOutlineMan />
            )
        }
        else {
            return (
                <AiOutlineWoman />
            )
        }
    }

    const ClickHandler = () => {
        navigate("/reviseprofile");
    }



    // console.log(member);

    const [buttonId, setButtonId] = useState(1);

    const handleButtonClick = (id) => {
        setButtonId(id);
    };

    return (
        <section className={style.board}>
            {/* 프로필블록 */}
            <div className={style.topBoard}>
                <article className={style.editLine}>
                    <div>
                        {token.memberId == memberId ?
                            <button onClick={ClickHandler}>프로필수정</button> :
                            <button onClick={ClickHandler}>신고</button>}
                        {/* <button>경력수정</button> */}
                    </div>
                    
                </article>
                <section className={style.profileMain}>
                    {/* 왼쪽프로필 */}
                    <article className={style.profileBoard}>
                        <img src={member?.profileImage} alt='profile' className={style.image} />
                        <div style={{ fontWeight: 'bold' }}>
                            {member.nickname}
                        </div>
                        {/* 별점 */}
                        <div style={{ marginBottom: '15px', marginTop: '10px' }}>
                            <StarPoint starPoint={member.starPoint} />
                            <div style={{ marginLeft: "3px" }}>
                                {member.starPoint}.0
                            </div>
                        </div>
                        <article>
                            <div className={style.profileSub}>
                                <div>성별</div>
                                <h3 style={{ fontSize: "1.10em" }}> {genderSet()}</h3>
                            </div>

                            <div className={style.profileSub}>
                                <div>선호 지역</div>
                                <h4>{member.preferredArea}</h4>
                            </div>
                        </article>
                    </article>
                    {/* 오른쪽 경력 */}
                    <article className={style.careerBoard}>
                        <div className={style.careerTitle}>댕댕 경력</div>
                        <article className={style.careerContent}>
                            <div className={style.careerSub}>
                                <div>경험 견종</div>
                                <div>펫시터 경력</div>
                                <div>상세 이력</div>
                            </div>
                            <div className={style.careerDetail}>
                                <div>{member.experience}</div>
                                <div>{member.petSitterCareer}회</div>
                                <div>{member.detailedHistory && member.detailedHistory.split(". ").map(item => <p>{item}</p>)} </div>
                            </div>
                        </article>
                    </article>
                </section>

            </div>
            {/* 리스트 블록 */}
            <div className={style.bottomBoard}>
                <div className={style.careerTitle}>
                    <button onClick={() => handleButtonClick(1)}>댕댕 리뷰 (n개)</button>
                    {token.memberId == memberId &&
                        <>
                            <button onClick={() => handleButtonClick(2)}>신청 내역</button>
                            <button onClick={() => handleButtonClick(3)}>나의 펫시터 모집</button>
                            <button onClick={() => handleButtonClick(4)}>나의 펫맘 모집</button>
                        </>
                    }
                </div>
                {buttonId && <MyCardList buttonId={buttonId} />}
            </div>
            <div className={style.out}> 
                {token.memberId == memberId && 
                <button onClick={handleDelete} >사이트 탈퇴하기</button>}
            </div>
        </section>
    );

}


export default MyPageMain;