import style from "./AllReviewPage.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { callReviewDetailAPI } from "../../api/reviewListAPI";



function AllReviewPage() {

    //리덕스
    const dispatch = useDispatch();
    const { reviewId } = useParams();
    const review = useSelector(state => state.reviewReducer);


    useEffect(
        () => {
            dispatch(callReviewDetailAPI({ reviewId: reviewId }));
        }
        , []
    );


    console.log(review);

    return (
        <section className={style.board}>
            <section>
                <button className={style.imageBtn}> &lt; </button>
            </section>
            <article>
                <div className={style.content}>
                    <div className={style.image}>사진</div>
                    <article>( n / n )</article>
                    <section className={style.contentContainer}>
                        <div style={{ display: 'flex', borderBottom: '1px solid #8d8d8d' }}>
                            <div>닉네임님</div>
                            <div>별점</div>
                        </div>
                        <section className={style.context}>{review.reviewTitle}
                            <section>{review.reviewDetail}</section>
                        </section>
                        <button>닫기</button>
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