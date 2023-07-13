import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApplicantBox from "../../item/ApplicantBox";
import "../../../css/applicant.css";
import PageBtn from "../../common/PageBtn";
import { getApplicantListAPI, getMomApplicantList } from "../../../api/applicantAPI";
import { useParams } from "react-router-dom";

function ApplicantsList() {

    const dispatch = useDispatch();

    const { boardId } = useParams();

    const currentPage = useSelector(state => state.pageReducer);
    const { data: applicantsList, pageInfo } = useSelector(state => state.applicantsReducer);

    useEffect(
        () => {
                dispatch(getApplicantListAPI(currentPage, boardId, 6));
        },
        [currentPage]
    );

    return (

        <div className="reviewmodal">
            <div className="applicantsList">
                <h1>신청자 목록</h1>
                <div className="dis-flex flex-column align-center applicants">
                    {applicantsList ?
                        applicantsList.map(applicant => <ApplicantBox key={applicant.applicantId} user={applicant} />) :
                        <h2>신청자가 없습니다.</h2>
                    }
                </div>
                <PageBtn pageInfo={pageInfo} />
            </div>
        </div>
    )
}

export default ApplicantsList;