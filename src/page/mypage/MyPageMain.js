import style from "./MyPageMain.module.css";
import MyReviewPage from "../review/MyReviewPage";
import { useNavigate } from "react-router-dom";
import MyCardList from "../../component/list/AppliedList";
import AppliedCardBoard from "../../component/item/AppliedCardBoard"
import { useEffect, useState } from "react";
import { getCurrentMember } from "../../api/MemberAPICalls";
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';

function MyPageMain() {

    //리덕스
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const member = useSelector(state => state.memberReducer);
    
    const ClickHandler = () => {
        navigate("/reviseprofile", { replace: true });
    }

    useEffect(() => {
        dispatch(getCurrentMember());

    }, []
    );

    const ARRAY = [0, 1, 2, 3, 4];
    const [score, setScore] = useState([false, false, false, false, false]);
    const starScore = starPoint => {
        let star = [...score];
        for (let i = 0; i < 5; i++) {
            star[i] = i < starPoint ? true : false;
        }
        setScore(star);
    };

    useEffect(() => {
        starScore(member.starPoint)
    }, [member]
    );

    console.log(member);

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
                        <button>쪽지함</button>
                    </div>
                    <div>
                        <button onClick={ClickHandler}>프로필수정</button>
                        {/* <button>경력수정</button> */}
                    </div>
                </article>
                <section className={style.profileMain}>
                    {/* 왼쪽프로필 */}
                    <article className={style.profileBoard}>
                        <div className={style.image}>프로필 사진</div>
                        <div style={{ fontWeight: 'bold' }}>
                            {member.nickname}
                        </div>
                        <div style={{ marginBottom: '15px', marginTop: '10px' }}>
                            <div>{ARRAY.map((el, index) => (
                                <FaStar
                                    style={{ marginRight: "3px" }}
                                    key={index}
                                    size="18"
                                    className={score[el] ? 'yellowStar' : "grayStar"}
                                ></FaStar>
                            ))}
                            </div>
                            <div  style={{ marginLeft: "3px" }}>
                            {member.starPoint}.0
                            </div>
                        </div>
                        <article>
                            {/* <div className={style.profileSub}>
                                <div>펫시터 모집 기록</div>
                                <h4> 2 회</h4>
                            </div>
                            <div className={style.profileSub}>
                                <div>펫맘 모집 기록</div>
                                <h4> 2 회</h4>
                            </div> */}
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
                                <div>기간</div>
                                <div>펫시터 경력</div>
                                <div>상세 이력</div>
                            </div>
                            <div className={style.careerDetail}>
                                <div></div>
                                <div>{member.period}</div>
                                <div></div>
                                <div>{member.detailedHistory}</div>
                            </div>
                        </article>
                    </article>
                </section>

            </div>
            {/* 리스트 블록 */}
            <div className={style.bottomBoard}>
                <div className={style.careerTitle}>
                    <button onClick={() => handleButtonClick(1)}>댕댕 리뷰 (n개)</button>
                    <button onClick={() => handleButtonClick(2)}>신청 내역</button>
                    <button onClick={() => handleButtonClick(3)}>나의 펫시터 모집</button>
                    <button onClick={() => handleButtonClick(4)}>나의 펫맘 모집</button>
                </div>
                {buttonId && <MyCardList buttonId={buttonId} />}

            </div>

        </section>
    );

}


export default MyPageMain;