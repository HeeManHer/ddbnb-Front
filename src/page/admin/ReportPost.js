import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReportMemberList } from "../../api/adminAPI";
import PageBtn from "../../component/common/PageBtn";
import { useNavigate } from "react-router-dom";

function ReportMember() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: memberList, pageInfo } = useSelector(state => state.userReportReducer);

    useEffect(
        () => {
            dispatch(getReportMemberList());
        },
        []
    )

    return (
        <div className="container">
            <div className="menuheader">
                <h2 onClick={() => navigate("/manage/reportMember")}>회원 신고</h2>
                <div className="topbar-divider"></div>
                <h2 onClick={() => navigate("/manage/reportPost")}>게시글 신고</h2>
            </div>
            <div className="searchheader">
                <div>상세검색</div>
                <div className="dis-flex align-center justify-between">
                    <div>
                        <label className="reporter">신고자 : </label>
                        <input type="text" />
                    </div>
                </div>
                <button className="searchbutton">검색</button>
            </div>
            <div className="buttonlist">
                <button className="changebutton">상태 변경</button>
            </div>

            <table className="adminTable">
                <thead>
                    <tr>
                        <th style={{ "width": "10%" }}>체크</th>
                        <th style={{ "width": "10%" }}>신고 번호</th>
                        <th style={{ "width": "10%" }}>신고자</th>
                        <th style={{ "width": "10%" }}>피신고자</th>
                        <th style={{ "width": "10%" }}>신고일자</th>
                        <th style={{ "width": "10%" }}>신고사유</th>
                        <th style={{ "width": "10%" }}>처리상태</th>

                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(memberList) && memberList.map(item => (
                        <tr>
                            <td >
                                <input type="checkbox" />
                            </td>
                            <td >{item.no}</td>
                            <td >{item.reportMember}</td>
                            <td >{item.memberReport}</td>
                            <td >{item.date}</td>
                            <td >{item.reportContact}</td>
                            <td >{item.memberReportManagement}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}

export default ReportMember;