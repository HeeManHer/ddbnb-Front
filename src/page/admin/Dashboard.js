import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findMemberBySignDayIsToday, getMemberAmount, getTodayVisitant, getNewReport } from "../../api/adminAPI";

function Dashboard() {
    const dispatch = useDispatch();

    const report = useSelector(state => state.reportReducer);
    const member = useSelector(state => state.memberReducer);

    const [memberAmount, setMemberAmount] = useState({
        allMember: 0,
        todayVisitant: 0,
        newMember: 0,

        memberReport: 0,
        boardReport: 0,
    });
    const [signDayIsToday, setSignDayIsToday] = useState([]);

    useEffect(
        () => {
            dispatch(getNewReport());
            getMemberAmount().then(amount => setMemberAmount(amount.data));
            findMemberBySignDayIsToday().then(member => setSignDayIsToday(member.data));
        },
        []
    )

    console.log(report);

    return (
        <div className="container">
            <div className="menuheader">
                <h2>대시 보드</h2>
            </div>

            <div className="dashboard">
                <div className="visitantBoard">
                    <div className="userCount border-black allUser">
                        <div>{memberAmount.allMember}명</div>
                        <div>전체 회원</div>
                    </div>
                    <div className="userCount border-black curruntUser">
                        <div>{memberAmount.todayVisitant}명</div>
                        <div>오늘 방문자 수</div>
                    </div>
                </div>

                <div>
                    <div className="issueBoard">
                        <div className="dis-flex align-center">
                            <span>오늘의 이슈 </span>
                            <div className="circle">
                                {
                                    memberAmount.newMember +
                                    memberAmount.memberReport +
                                    memberAmount.boardReport
                                }
                            </div>
                        </div>

                        <div className="issue border-black">
                            <span>신규 회원 {memberAmount.newMember}</span>
                            <span>회원신고 {memberAmount.memberReport}</span>
                            <span>게시글 신고 {memberAmount.boardReport}</span>
                        </div>
                    </div>

                    <div className="statusBoard">
                        <div className="tableSection">
                            <h3>신규 회원</h3>
                            <table className="adminTable">
                                <thead>
                                    <tr>
                                        <th>회원번호</th>
                                        <th>닉네임</th>
                                        <th>선호지역</th>
                                        <th>가입일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(signDayIsToday) && signDayIsToday.map(member => (
                                        <tr key={member.memberId}>
                                            <td>{member.memberId}</td>
                                            <td>{member.nickname}</td>
                                            <td>{member.preferredArea}</td>
                                            <td>{member.signDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="tableSection">
                            <h3>오늘 회원 신고</h3>
                            <table className="adminTable">
                                <thead>
                                    <tr>
                                        <th>신고일자</th>
                                        <th>신고자 ID</th>
                                        <th>피신고자 ID</th>
                                        <th>신고사유</th>
                                        <th>처리상태</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(report) && report.map(report =>
                                        report.reportCategory === '회원' &&
                                        (
                                            <tr key={report.reportId}>
                                                <td>{report.reportDate}</td>
                                                <td>{report.currentUser.memberId}</td>
                                                <td>{report.otherUser.memberId}</td>
                                                <td>{report.reportReason}</td>
                                                <td>{report.reportState}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="tableSection">
                            <h3>오늘 게시글 신고</h3>
                            <table className="adminTable">
                                <thead>
                                    <tr>
                                        <th>신고일자</th>
                                        <th>신고자 ID</th>
                                        <th>피신고자 ID</th>
                                        <th>신고사유</th>
                                        <th>처리상태</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(report) && report.map(report =>
                                        report.reportCategory === '게시글' &&
                                        (
                                            <tr key={report.reportId}>
                                                <td>{report.reportDate}</td>
                                                <td>{report.currentUser.memberId}</td>
                                                <td>{report.otherUser.memberId}</td>
                                                <td>{report.reportReason}</td>
                                                <td>{report.reportState}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Dashboard;