import { useDispatch, useSelector } from 'react-redux';
import { getMemberList } from '../../api/adminAPI';
import { useEffect } from 'react';
import PageBtn from '../../component/common/PageBtn';

function Member() {
    const dispatch = useDispatch();

    const { data: memberList, pageInfo } = useSelector(state => state.userReportReducer);

    useEffect(
        () => {
            dispatch(getMemberList());
        },
        []
    )

    return (
        <div className="container">
            <div className="menuheader">
                <h2>회원 관리</h2>
            </div>
            <div className="searchheader">
                <div>상세검색</div>
                <div className='dis-flex justify-between'>
                    <label htmlFor="nickname">닉네임 : </label>
                    <input type="text" />
                    <label htmlFor="signupDate">가입일 : </label>
                    <input type="date" />
                    <label htmlFor="lastLogin">최종 접속일 : </label>
                    <input type="date" />
                </div>
                <button className="searchbutton">검색</button>
            </div>
            <div className="buttonlist">
                <button className="changebutton">상태 변경</button>
                <button className="changebutton">탈퇴 처리</button>
            </div>

            <table className="adminTable">
                <thead>
                    <tr>
                        <th></th>
                        <th>회원번호</th>
                        <th>닉네임</th>
                        <th>상태</th>
                        <th>가입일</th>
                        <th>신고 처리 수</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(memberList) && memberList.map(item => (
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td>{item.no}</td>
                            <td>{item.name}</td>
                            <td>{item.state}</td>
                            <td>{item.joinDate}</td>
                            <td>{item.reportAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>

    )
}

export default Member;