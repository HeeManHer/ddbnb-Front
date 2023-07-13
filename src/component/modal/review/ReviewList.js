import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../review/review.css";
import PageBtn from "../../common/PageBtn";
import { getApplicantListAPI } from "../../../api/applicantAPI"
import ReviewModal from "../review/ReviewModal";
import { useParams } from "react-router-dom";

function ReviewList({ closeModalList }) {

    const dispatch = useDispatch();

    const [selectedCheckbox, setSelectedCheckbox] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false); // 추가

    const currentPage = useSelector(state => state.pageReducer);
    const { data: getapplicant, pageInfo } = useSelector(state => state.applicantsReducer);

    const { boardId } = useParams();

    useEffect(
        () => {
            dispatch(getApplicantListAPI(currentPage, boardId));
        }
        , []
    )

    const handleCancel = () => {
        closeModalList();
    };

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
                {Array.isArray(getapplicant) && getapplicant.map((getapplicant, index) => (
                    <div className="reviewlist-people-line" key={getapplicant.applicantId}>
                        <div className="reviewlist-organize">
                            <div className="reviewlist-imgandName">
                                <img className="reviewlist-img" src={getapplicant.member.profileImage} alt="리뷰 프로필 이미지" />
                                <h6>{getapplicant.applicantId}</h6>
                            </div>
                            <div className="reviewList-line">
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id={`cb${index + 1}`}
                                checked={selectedCheckbox === getapplicant.member.memberId}
                                onChange={() => handleCheckboxChange(getapplicant.member.memberId)} value={getapplicant.member.memberId} />
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