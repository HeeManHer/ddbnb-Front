import { useDispatch, useSelector } from 'react-redux';
import { getMemberList } from '../../api/adminAPI';
import { useEffect, useState } from 'react';
import PageBtn from '../../component/common/PageBtn';
import { RESET_PAGE } from '../../modules/currentPage';

function Member() {
    const dispatch = useDispatch();

    const { data: memberList, pageInfo } = useSelector(state => state.memberReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const [searchValue, setSearchValue] = useState({
        nickname: "",
        signDate: ""
    });

    useEffect(
        () => {
            dispatch(getMemberList(currentPage, searchValue));
        },
        [currentPage]
    )

    const inputSearchValue = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value
        })
    }
    console.log(memberList);

    const search = () => {
        dispatch({ type: RESET_PAGE });
        dispatch(getMemberList(1, searchValue))
    }

    return (
        <div className="container">
            <div className="menuheader">
                <h2>회원 관리</h2>
            </div>
            <div className="searchheader">
                <div>상세검색</div>
                <div className='dis-flex justify-around'>
                    <div>
                        <label htmlFor="nickname">닉네임 : </label>
                        <input type="text" name='nickname' value={searchValue.nickname} onChange={inputSearchValue} />
                    </div>
                    <div>
                        <label htmlFor="signDate">가입일 : </label>
                        <input type="date" name='signDate' value={searchValue.signDate} onChange={inputSearchValue} />
                    </div>
                    <div>
                        <label htmlFor="lastVisitDate">최종 접속일 : </label>
                        <input type="date" name='lastVisitDate' />
                    </div>
                </div>
                <button className="searchbutton" onClick={search}>검색</button>
            </div>
            <div className="buttonlist">
                {/* <button className="changebutton">상태 변경</button>
                <button className="changebutton">탈퇴 처리</button> */}
            </div>

            <table className="adminTable">
                <thead>
                    <tr>
                        <th></th>
                        <th>회원번호</th>
                        <th>닉네임</th>
                        <th>상태</th>
                        <th>가입일</th>
                        <th>신고</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(memberList) && memberList.map((member, index) => (
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{member.memberId}</td>
                            <td>{member.nickname}</td>
                            <td>{member.status}</td>
                            <td>{member.signDate}</td>
                            <td>{member.reportedCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>

    )
}

export default Member;