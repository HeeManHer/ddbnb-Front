import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoardList } from "../../api/adminAPI";
import PageBtn from "../../component/common/PageBtn";
import { useNavigate } from "react-router-dom";

function BoardManage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: boardList, pageInfo } = useSelector(state => state.petSitterReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const [category, setCategory] = useState('petmom');


    useEffect(
        () => {
            dispatch(getBoardList(category, currentPage));
        },
        [category, currentPage]
    )

    return (
        <div className="container">
            <div className="menuheader dis-flex">
                <h2 style={category === 'petmom' ? { color: '#FAB7A2' } : null} onClick={() => setCategory('petmom')}>펫맘 모집글 게시판</h2>
                <div className="topbar-divider"></div>
                <h2 style={category === 'petsitter' ? { color: '#FAB7A2' } : null} onClick={() => setCategory('petsitter')}>펫시터 모집글 게시판</h2>
            </div>
            <div className="searchheader">
                <div>상세검색</div>
                <div className="dis-flex align-center">
                    <div>
                        <label className="reporter">작성자 : </label>
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
                        <th style={{ "width": "5%" }}></th>
                        <th style={{ "width": "5%" }}>번호</th>
                        <th style={{ "width": "35%" }}>게시글 제목</th>
                        <th style={{ "width": "10%" }}>작성자</th>
                        <th style={{ "width": "10%" }}>게시글 등록일</th>
                        <th style={{ "width": "10%" }}>게시 상태</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(boardList) && boardList.map((item, index) => (
                        <tr key={index}>
                            <td >
                                <input type="checkbox" />
                            </td>
                            <td >{item.boardId}</td>
                            <td >{item.boardTitle}</td>
                            <td >{item.member?.nickname}</td>
                            <td >{item.boardDate}</td>
                            <td >{item.sitterStatus || item.momStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}

export default BoardManage;