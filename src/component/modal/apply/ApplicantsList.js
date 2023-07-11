import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApplicantBox from "../../item/ApplicantBox";
import "../../../css/applicant.css";
import PageBtn from "../../common/PageBtn";
import { getApplicantListAPI, getMomApplicantList } from "../../../api/applicantAPI";
import { useParams } from "react-router-dom";

function ApplicantsList({ category, closeModalList }) {

    const dispatch = useDispatch();

    const { boardId } = useParams();

    const currentPage = useSelector(state => state.pageReducer);
    const { data: applicantsList, pageInfo } = useSelector(state => state.applicantsReducer);

    useEffect(
        () => {
            if (category === 'sitter') {
                dispatch(getApplicantListAPI(currentPage, boardId, 6));
            } else if (category === 'mom') {
                dispatch(getMomApplicantList(currentPage, boardId, 6));
            }
        },
        [currentPage]
    );

    return (

        <div className="reviewmodal">
            <div className="applicantsList">
                <h1>신청자 목록</h1>
                <div className="dis-flex flex-column align-center applicants">
                    {Array.isArray(applicantsList) && applicantsList.map(applicant => <ApplicantBox key={applicant.applicantId} user={applicant} />)}
                </div>
                <PageBtn pageInfo={pageInfo} />
            </div>
        </div>
    )
}

export default ApplicantsList;