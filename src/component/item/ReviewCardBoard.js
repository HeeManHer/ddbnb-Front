import style from './ReviewCardBoard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import MyReviewPage from '../../page/review/MyReviewPage';
import { useEffect, useState } from "react";
import { callReviewListAPI } from "../../api/reviewListAPI";
import { useDispatch, useSelector } from "react-redux";
import PageBtn from '../common/PageBtn';
import { FaStar } from 'react-icons/fa';
import StarPoint from './StarPoint';

function ReviewCardBoard() {

    //리덕스
    const dispatch = useDispatch();
    const review = useSelector(state => state.reviewReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const { data: reviews, pageInfo } = review;

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
                    <Link to={`/reviews/${review.reviewId}`} key={index}>
                        <button className={style.review} >
                            <div className={style.Image}>
                                <img src={review.reviewImage[0]?.imageUrl} />
                            </div>
                            <div className={style.context}>
                                <div style={{ display: "flex" }}>
                                    <StarPoint starPoint={review.reviewStarPoint} />
                                    <div style={{ marginLeft: "3px", marginTop: "3px", fontWeight: "bold" }}>
                                        ( {review.reviewStarPoint}.0 )
                                    </div>
                                </div>
                                <div className={style.ReviewName}>
                                    {review.reviewTitle.length > 10? review.reviewTitle.substring(0, 10)+ "...":review.reviewTitle}
                                </div>
                                <div className={style.write}>
                                    <div>{review.reviewerId}</div>
                                    <div>{review.reviewWriteDate}</div>
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