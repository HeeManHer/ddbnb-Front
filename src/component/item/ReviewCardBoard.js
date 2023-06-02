import style from './ReviewCardBoard.module.css';
import { useNavigate } from 'react-router-dom';
import MyReviewPage from '../../page/review/MyReviewPage';

function ReviewCardBoard() {

    const navigate = useNavigate();

    const goReviewHandler = () => {
        navigate("/myReview");
        // window.location.reload();
    }



    return (
        <section className={style.section}>
            {/* 리뷰 */}
            {/* 블럭1 */}
            <div className={style.board}>
            <button className={style.review} onClick={goReviewHandler}>
                    <div className={style.Image}>
                    </div>
                    <div className={style.context}>
                        <div className={style.star}>
                            별점
                        </div>
                        <div className={style.ReviewName}>
                            리뷰명
                        </div>
                        <div className={style.write}>
                            <div>이주동</div>
                            <div>2023-03-21</div>
                        </div>
                        {/* <div className={style.category}>
                            <div>소형견</div>
                            <div>서울시 광진구</div>
                        </div> */}
                    </div>
                </button>
                <button className={style.review} onClick={goReviewHandler}>
                    <div className={style.Image}>
                    </div>
                    <div className={style.context}>
                        <div className={style.star}>
                            별점
                        </div>
                        <div className={style.ReviewName}>
                            리뷰명
                        </div>
                        <div className={style.write}>
                            <div>이주동</div>
                            <div>2023-03-21</div>
                        </div>
                        {/* <div className={style.category}>
                            <div>소형견</div>
                            <div>서울시 광진구</div>
                        </div> */}
                    </div>
                </button>
                <button className={style.review} onClick={goReviewHandler}>
                    <div className={style.Image}>
                    </div>
                    <div className={style.context}>
                        <div className={style.star}>
                            별점
                        </div>
                        <div className={style.ReviewName}>
                            리뷰명
                        </div>
                        <div className={style.write}>
                            <div>이주동</div>
                            <div>2023-03-21</div>
                        </div>
                        {/* <div className={style.category}>
                            <div>소형견</div>
                            <div>서울시 광진구</div>
                        </div> */}
                    </div>
                </button>
                <button className={style.review} onClick={goReviewHandler}>
                    <div className={style.Image}>
                    </div>
                    <div className={style.context}>
                        <div className={style.star}>
                            별점
                        </div>
                        <div className={style.ReviewName}>
                            리뷰명
                        </div>
                        <div className={style.write}>
                            <div>이주동</div>
                            <div>2023-03-21</div>
                        </div>
                        {/* <div className={style.category}>
                            <div>소형견</div>
                            <div>서울시 광진구</div>
                        </div> */}
                    </div>
                </button>
            </div>
            {/* 블럭2 */}
            <div className={style.board}>
                <button className={style.review} onClick={goReviewHandler}>
                    <div className={style.Image}>
                    </div>
                    <div className={style.context}>
                        <div className={style.star}>
                            별점
                        </div>
                        <div className={style.ReviewName}>
                            리뷰명
                        </div>
                        <div className={style.write}>
                            <div>이주동</div>
                            <div>2023-03-21</div>
                        </div>
                        {/* <div className={style.category}>
                            <div>소형견</div>
                            <div>서울시 광진구</div>
                        </div> */}
                    </div>
                </button>
                <button className={style.review} onClick={goReviewHandler}>
                    <div className={style.Image}>
                    </div>
                    <div className={style.context}>
                        <div className={style.star}>
                            별점
                        </div>
                        <div className={style.ReviewName}>
                            리뷰명
                        </div>
                        <div className={style.write}>
                            <div>이주동</div>
                            <div>2023-03-21</div>
                        </div>
                        {/* <div className={style.category}>
                            <div>소형견</div>
                            <div>서울시 광진구</div>
                        </div> */}
                    </div>
                </button>
                <button className={style.review} onClick={goReviewHandler}>
                    <div className={style.Image}>
                    </div>
                    <div className={style.context}>
                        <div className={style.star}>
                            별점
                        </div>
                        <div className={style.ReviewName}>
                            리뷰명
                        </div>
                        <div className={style.write}>
                            <div>이주동</div>
                            <div>2023-03-21</div>
                        </div>
                        {/* <div className={style.category}>
                            <div>소형견</div>
                            <div>서울시 광진구</div>
                        </div> */}
                    </div>
                </button>
                <button className={style.review} onClick={goReviewHandler}>
                    <div className={style.Image}>
                    </div>
                    <div className={style.context}>
                        <div className={style.star}>
                            별점
                        </div>
                        <div className={style.ReviewName}>
                            리뷰명
                        </div>
                        <div className={style.write}>
                            <div>이주동</div>
                            <div>2023-03-21</div>
                        </div>
                        {/* <div className={style.category}>
                            <div>소형견</div>
                            <div>서울시 광진구</div>
                        </div> */}
                    </div>
                </button>
            </div>

            {/* 페이징 */}


        </section>
    );

}

export default ReviewCardBoard;