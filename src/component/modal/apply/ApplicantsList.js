import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getApplicantsList } from "../../../api/memberAPI"
import ApplicantBox from "../../item/ApplicantBox";
import "../../../css/applicant.css";
import PageBtn from "../../common/PageBtn";

function ApplicantsList() {

    const dispatch = useDispatch();

    const currentPage = useSelector(state => state.pageReducer);
    const { data: applicantsList, pageInfo } = useSelector(state => state.applicantsReducer);

    useEffect(
        () => {
            // dispatch(getApplicantsList(currentPage));
        },
        [currentPage]
    );

    return (
        <div className="applicantsList">
            <h1>신청자 목록</h1>
            <div className="dis-flex flex-column align-center applicants">
                {Array.isArray(applicantsList) && applicantsList.map(applicant => <ApplicantBox key={applicant.no} user={applicant} />)}
            </div>
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}

export default ApplicantsList;