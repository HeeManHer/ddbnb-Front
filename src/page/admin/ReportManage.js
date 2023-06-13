import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReportList } from "../../api/adminAPI";
import PageBtn from "../../component/common/PageBtn";
import { useNavigate } from "react-router-dom";

function ReportManage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: reportList, pageInfo } = useSelector(state => state.reportReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const [category, setCategory] = useState('회원');

    useEffect(
        () => {
            dispatch(getReportList(category));
        },
        [category, currentPage]
    )

    return (
        <div className="container">
            <div className="menuheader">
                <h2 style={category === '회원' ? { color: '#FAB7A2' } : null} onClick={() => setCategory('회원')}>회원 신고</h2>
                <div className="topbar-divider"></div>
                <h2 style={category === '게시글' ? { color: '#FAB7A2' } : null} onClick={() => setCategory('게시글')}>게시글 신고</h2>
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
                    {Array.isArray(reportList) && reportList.map(item => (
                        <tr>
                            <td >
                                <input type="checkbox" />
                            </td>
                            <td >{item.reportId}</td>
                            <td >{item.currentUser.nickname}</td>
                            <td >{item.otherUser.nickname}</td>
                            <td >{item.reportDate}</td>
                            <td >{item.reportReason}</td>
                            <td >{item.reportState}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}

export default ReportManage;