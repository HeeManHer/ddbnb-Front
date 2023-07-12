import "../../css/petsitterList.css";
import { useNavigate } from "react-router-dom";
import { callPetsitterListAPI } from "../../api/petsitterAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageBtn from "../../component/common/PageBtn";
import SearchBar from "../../component/item/SearchBar";
import PetSitterOptionBtn from "../../component/item/PetSitterOptionBtn";
import PetSitterCard from "../../component/list/PetSitterCard";

function PetSitterList() {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    const postUser = token !== null ? true : false;

    const { data: petsitterList, pageInfo } = useSelector(state => state.petSitterReducer);

    const searchValue = useSelector(state => state.searchReducer);
    const currentPage = useSelector(state => state.pageReducer);

    useEffect(
        () => {
            dispatch(callPetsitterListAPI(currentPage, searchValue));
        }
        , [currentPage, searchValue]
    )

    return (
        <div>
            {postUser && <button className="write" onClick={() => navigate("./recruit")}>글쓰기</button>}
            <br />

            <div className="main">
                <SearchBar Option={PetSitterOptionBtn} />
            </div>
            <br />
            {Array.isArray(petsitterList) && petsitterList.map(petsitter => (
                <PetSitterCard petsitter={petsitter} key={petsitter.boardId} />
            ))}
            <PageBtn pageInfo={pageInfo} />
        </div >
    )
}

export default PetSitterList;