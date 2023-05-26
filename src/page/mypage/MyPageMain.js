import style from "./MyPageMain.module.css";
import MyReviewPage from "../review/MyReviewPage";
import { useNavigate } from "react-router-dom";

function MyPageMain() {

    const navigate = useNavigate();

    const onClickMyReviewHandler = () => {
        navigate("/myReview");
    };
    const onClickAllReviewHandler = () => {
        navigate("/allReview");
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
                        <button style={{ marginRight: '10px' }}>프로필수정</button>
                        <button>경력수정</button>
                    </div>
                </article>
                <section className={style.profileMain}>
                    {/* 왼쪽프로필 */}
                    <article className={style.profileBoard}>
                        <div className={style.image}>프로필 사진</div>
                        <div style={{ marginBottom: '15px' }}> 별점 </div>
                        <article>
                            <div className={style.profileSub}>
                                <div>펫시터 모집 기록</div>
                                <h4> 2 회</h4>
                            </div>
                            <div className={style.profileSub}>
                                <div>펫맘 모집 기록</div>
                                <h4> 2 회</h4>
                            </div>
                            <div className={style.profileSub}>
                                <div>선호 지역</div>
                                <h4>서울시 광진구</h4>
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
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </article>
                    </article>
                </section>

            </div>
            {/* 리스트 블록 */}
            <div className={style.bottomBoard}>
                <div className={style.careerTitle}>
                    <button onClick={onClickMyReviewHandler}>댕댕 리뷰 (n개)</button>
                    <button onClick={onClickAllReviewHandler}>신청 내역</button>
                    <button>나의 펫시터 모집</button>
                    <button>나의 펫맘 모집</button>
                </div>


            </div>

        </section>
    )
}

export default MyPageMain;