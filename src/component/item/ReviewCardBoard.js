import style from './ReviewCardBoard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import MyReviewPage from '../../page/review/MyReviewPage';
import { useEffect, useState } from "react";
import { callReviewListAPI } from "../../api/reviewListAPI";
import { useDispatch, useSelector } from "react-redux";
import PageBtn from '../common/PageBtn';

function ReviewCardBoard() {

    //리덕스
    const dispatch = useDispatch();
    const reviewList = useSelector(state => state.reviewReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const { data: reviews, pageInfo } = reviewList;

    useEffect(() => {
        dispatch(callReviewListAPI({ currentPage: currentPage }));

    }, [currentPage]);

    const navigate = useNavigate();
    const goReviewHandler = () => {
        navigate("/myReview");
        // window.location.reload();
    }

    //리뷰리스트 출력
    console.log(reviews);

    /* 리뷰명 */
    // const REVIEW_NAME = reviewList.reviewTitle;

    return (
        <section className={style.section}>
            {/* 리뷰 */}
            {/* 블럭1 */}
            <div className={style.board}>
                {Array.isArray(reviews) && reviews.map((review, index) =>
                    <Link to={`/reviews/${review.reviewId}`}>
                        <button className={style.review} key={index}>
                            <div className={style.Image}>
                            </div>
                            <div className={style.context}>
                                <div className={style.star}>
                                    {review.reviewStarPoint}
                                </div>
                                <div className={style.ReviewName}>
                                    {review.reviewTitle}
                                </div>
                                <div className={style.write}>
                                    <div>{review.reviewerId}</div>
                                    <div>{new Date(review.reviewWriteDate).toLocaleDateString().slice(0, -1)}</div>
                                </div>
                            </div>
                        </button>
                    </Link>
                )}
            </div>

            {/* 페이징 */}
            <PageBtn pageInfo={pageInfo} />


        </section>
    );

}

export default ReviewCardBoard;