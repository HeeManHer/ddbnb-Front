import { useDispatch, useSelector } from "react-redux";
import "../../css/dashboard.css";
import { useEffect } from "react";
import { getUserReport } from "../../api/dashAPI";

function Dashboard() {
    const dispatch = useDispatch();

    const userReport = useSelector(state => state.userReportReducer);

    useEffect(
        () => {
            dispatch(getUserReport());
        },
        []
    )

    return (
        <div className="container">
            <div className="menuheader dis-flex align-center">대시 보드</div>

            <div className="dashboard border-black">
                <div className="visitantBoard">
                    <div className="userCount border-black allUser">
                        <div>25304</div>
                        <div>전체 회원</div>
                    </div>
                    <div className="userCount border-black curruntUser">
                        <div>1342</div>
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
                            <span>회원신고 {1}</span>
                            <span>펫맘 게시글 신고 {1}</span>
                            <span>펫시터 게시글 신고 {1}</span>
                            <span>신규 문의 {0}</span>
                        </div>
                    </div>

                    <div className="statusBoard">
                        <div className="tableSection">
                            <h3>회원 신고 현황</h3>
                            <table className="boardTable">
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
                            <h3>회원 신고 현황</h3>
                            <table className="boardTable">
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
                            <h3>회원 신고 현황</h3>
                            <table className="boardTable">
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
                            <h3>회원 신고 현황</h3>
                            <table className="boardTable">
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