import style from "./AllReviewPage.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { callReviewDetailAPI } from "../../api/reviewListAPI";
import StarPoint from "../../component/item/StarPoint";
import { getCurrentMember } from "../../api/MemberAPICalls";
import { useNavigate } from "react-router-dom";

function AllReviewPage() {
    //리덕스
    const dispatch = useDispatch();
    const { reviewId } = useParams();
    const review = useSelector(state => state.reviewReducer);
    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(callReviewDetailAPI(reviewId));
        }
        , []
    );

    const closeHandler = () => {
        dispatch(getCurrentMember());
        navigate('/myPage', { replace: true });
        window.location.reload();
    }

    return (
        <section className={style.board}>
            <section>
                <button className={style.imageBtn}> &lt; </button>
            </section>
            <article>
                <div className={style.content}>
                    <div className={style.image}>
                        <img src={review.reviewImageUrl} alt="사진" />
                    </div>
                    <article>( n / n )</article>
                    <section className={style.contentContainer}>
                        <div style={{ display: 'flex', borderBottom: '1px solid #8d8d8d' }}>
                            <div>{review.reviewer && review.reviewer.nickname}</div>
                            <StarPoint starPoint={review.reviewStarPoint} />
                            <div style={{ marginLeft: "3px", fontWeight: "bold" }}>
                                ( {review.reviewStarPoint}.0 )
                            </div>
                        </div>
                        <section className={style.context}>{review.reviewTitle}
                            <section>{review.reviewDetail}</section>
                        </section>
                        <button onClick={closeHandler}>닫기</button>
                    </section>
                </div>
            </article>
            <section>
                <button className={style.imageBtn}> &gt; </button>
            </section>
        </section>
    )
}

export default AllReviewPage;                