import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findMemberBySignDayIsToday, getMemberAmount, getTodayVisitant, getUserReport } from "../../api/adminAPI";

function Dashboard() {
    const dispatch = useDispatch();

    const userReport = useSelector(state => state.userReportReducer);
    const member = useSelector(state => state.memberReducer);

    const [memberAmount, setMemberAmount] = useState(0);
    const [visitant, setVisitant] = useState(0);
    const [signDayIsToday, setSignDayIsToday] = useState([]);

    useEffect(
        () => {
            dispatch(getUserReport());
            getMemberAmount().then(amount => setMemberAmount(amount.data));
            getTodayVisitant().then(visitant => setVisitant(visitant.data));
            findMemberBySignDayIsToday(member => setSignDayIsToday(member.data))
        },
        []
    )

    console.log(signDayIsToday);

    return (
        <div className="container">
            <div className="menuheader">
                <h2>대시 보드</h2>
            </div>

            <div className="dashboard">
                <div className="visitantBoard">
                    <div className="userCount border-black allUser">
                        <div>{memberAmount}명</div>
                        <div>전체 회원</div>
                    </div>
                    <div className="userCount border-black curruntUser">
                        <div>{visitant}명</div>
                        <div>오늘 방문자 수</div>
                    </div>
                </div>

                <div>
                    <div className="issueBoard">
                        <div className="dis-flex align-center">
                            <span>오늘의 이슈 </span>
                            <div className="circle">3</div>
                        </div>

                        <div className="issue border-black">
                            <span>신규 회원 {0}</span>
                            <span>회원신고 {1}</span>
                            <span>펫맘 게시글 신고 {1}</span>
                            <span>펫시터 게시글 신고 {1}</span>
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
                                        console.log(member) &&
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
                                    {Array.isArray(userReport) && userReport.map(report => (
                                        <tr key={report.no}>
                                            <td>{report.date}</td>
                                            <td>{report.reporterId}</td>
                                            <td>{report.reportedId}</td>
                                            <td>{report.reason}</td>
                                            <td>{report.result}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="tableSection">
                            <h3>오늘 펫맘 게시글 신고</h3>
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
                                    {Array.isArray(userReport) && userReport.map(report => (
                                        <tr key={report.no}>
                                            <td>{report.date}</td>
                                            <td>{report.reporterId}</td>
                                            <td>{report.reportedId}</td>
                                            <td>{report.reason}</td>
                                            <td>{report.result}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="tableSection">
                            <h3>오늘 펫시터 게시글 신고</h3>
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
                                    {Array.isArray(userReport) && userReport.map(report => (
                                        <tr key={report.no}>
                                            <td>{report.date}</td>
                                            <td>{report.reporterId}</td>
                                            <td>{report.reportedId}</td>
                                            <td>{report.reason}</td>
                                            <td>{report.result}</td>
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