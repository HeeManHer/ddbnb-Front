import style from './ReviewCardBoard.module.css';
import { Link} from 'react-router-dom';
import { useEffect} from "react";
import { callReviewListAPI } from "../../api/reviewListAPI";
import { useDispatch, useSelector } from "react-redux";
import PageBtn from '../common/PageBtn';
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


    return (
        <section className={style.section}>
            <div className={style.board}>
                {Array.isArray(reviews) && reviews.map((review, index) =>
                    <Link to={`/reviews/${review.reviewId}`} key={index}>
                        <button className={style.review} >
                            <div className={style.Image}>
                                <img src={review.reviewImage[0]?.imageUrl} alt="리뷰 이미지" />
                            </div>
                            <div className={style.context}>
                                <div style={{ display: "flex" }}>
                                    <StarPoint starPoint={review.reviewStarPoint} />
                                    <div style={{ marginLeft: "3px", marginTop: "3px", fontWeight: "bold" }}>
                                        ( {review.reviewStarPoint}.0 )
                                    </div>
                                </div>
                                <div className={style.ReviewName}>
                                    {review.reviewTitle?.length > 10 ? review.reviewTitle.substring(0, 10) + "..." : review.reviewTitle}
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
            <PageBtn pageInfo={pageInfo} />


        </section>
    );

}

export default ReviewCardBoard;