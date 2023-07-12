import "../../css/petsitterList.css";
import "../../css/petmomList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPetMomList } from "../../api/petMomAPI";
import PageBtn from "../../component/common/PageBtn";
import PetMomOptionBtn from "../../component/item/PetMomOptionBtn";
import SearchBar from "../../component/item/SearchBar";
import PetMomCard from "../../component/list/PetMomCard";

function PetMomList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    const postUser = token !== null ? true : false;

    const { data: petmomList, pageInfo } = useSelector(state => state.petMomReducer);

    const searchValue = useSelector(state => state.searchReducer);
    const currentPage = useSelector(state => state.pageReducer);

    useEffect(
        () => {
            dispatch(getPetMomList(currentPage, searchValue));

        }
        , [currentPage, searchValue]
    )

    return (
        <div>
            {postUser && <button className="write" onClick={() => navigate("./recruit")}>글쓰기</button>}
            <br />
            <div className="main">
                <SearchBar Option={PetMomOptionBtn} />
            </div>
            <br />
            {Array.isArray(petmomList) && petmomList.map(petmom => (
                <PetMomCard petmom={petmom} key={petmom.boardId} />
            ))}
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}

export default PetMomList;