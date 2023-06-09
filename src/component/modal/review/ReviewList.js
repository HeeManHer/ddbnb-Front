import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../review/review.css";
import PageBtn from "../../common/PageBtn";
import { getReviewList } from "../../../api/reviewListAPI"
import ReviewModal from "../review/ReviewModal";

function ReviewList({ closeModalList }) {

    const [selectedCheckbox, setSelectedCheckbox] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false); // 추가



    const handleSubmit = () => {
        closeModalList();
    };

    const handleCancel = () => {
        closeModalList();
    };

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.pageReducer);
    const { pageInfo, data: reviewList } = useSelector(state => state.reviewmodalReducer);

    useEffect(
        () => {
            dispatch(getReviewList(currentPage));
        },
        [currentPage]
    );

    const handleCheckboxChange = (index) => {
        setSelectedCheckbox(index);
    };

    const handleReviewModalOpen = () => {
        if (selectedCheckbox !== -1) {
            setIsModalOpen(true); // 모달 열기 상태 변경
        }
    };




    return (
        <div className="reviewmodal">
            <div className="reviewmodal-header">리뷰 작성</div>
            <div className="reviewlist">댕댕비엔비를 함께한 신청자를 선택해주세요.</div>
            <div className="reviewlist-people">
                {Array.isArray(reviewList) && reviewList.map((item, index) => (
                    <div className="reviewlist-people-line" key={item.no}>
                        <div className="reviewlist-organize">
                            <div className="reviewlist-imgandName">
                                <div className="reviewlist-img">
                                </div>
                                <h6>{item.name}</h6>
                            </div>
                            <div className="reviewList-line">
                                <h5 className="reviewlist-join">펫시터 참여 기록</h5>
                                <h4 className="reviewlist-h4">{item.count1}회</h4>
                                <h5 className="reviewlist-join">펫맘 참여 기록</h5>
                                <h4 className="reviewlist-h4">{item.count2}회</h4>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id={`cb${index + 1}`}
                                checked={selectedCheckbox === index}
                                onChange={() => handleCheckboxChange(index)} />
                            <label htmlFor={`cb${index + 1}`}></label>
                        </div>
                    </div>
                ))}
            </div>
            <div><PageBtn pageInfo={pageInfo} /></div>
            <div><button className="reviewmodal-main3" onClick={handleReviewModalOpen}>리뷰작성</button>
                <button className="reviewmodal-main3" onClick={handleCancel} >닫기</button>
            </div>
            {
                isModalOpen && (
                    <ReviewModal
                        closeModalReview={() => setIsModalOpen(false)} // 모달 닫기 상태 변경
                        index={selectedCheckbox}
                    />
                )
            }
        </div >
    )
}

export default ReviewList;