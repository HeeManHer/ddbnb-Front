import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPetSitterList } from "../../api/adminAPI";
import PageBtn from "../../component/common/PageBtn";
import { useNavigate } from "react-router-dom";

function PetMomManage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: petSitterList, pageInfo } = useSelector(state => state.petSitterReducer);
    const currentPage = useSelector(state => state.pageReducer);

    useEffect(
        () => {
            dispatch(getPetSitterList(currentPage));
        },
        [currentPage]
    )
    console.log(petSitterList)

    return (
        <div className="container">
            <div className="menuheader dis-flex">
                <h2 onClick={() => navigate("/manage/petMom")}>펫맘 모집글 게시판</h2>
                <div className="topbar-divider"></div>
                <h2 className="font-color-main" onClick={() => navigate("/manage/petSitter")}>펫시터 모집글 게시판</h2>
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
                        <th style={{ "width": "45%" }}>게시글 제목</th>
                        <th style={{ "width": "10%" }}>작성자</th>
                        <th style={{ "width": "10%" }}>게시글 등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(petSitterList) && petSitterList.map(item => (
                        <tr>
                            <td >
                                <input type="checkbox" />
                            </td>
                            <td >{item.boardId}</td>
                            <td >{item.boardTitle}</td>
                            <td >{item.memberId.nickname}</td>
                            <td >{item.boardDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}

export default PetMomManage;