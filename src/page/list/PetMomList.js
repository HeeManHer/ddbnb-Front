import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "../../css/petsitterList.css";
import sigunguList from '../../data/sigoongu.json';
import { useDispatch, useSelector } from "react-redux";
import "../../css/petmomList.css";
import PageBtn from "../../component/common/PageBtn";
import { getPetMomList } from "../../api/petMomAPI";
import StarPoint from "../../component/item/StarPoint";
import PetMomOptionBtn from "../../component/item/PetMomOptionBtn";
import SearchBar from "../../component/item/SearchBar";
import PetMomCard from "../../component/list/PetMomCard";

function searchSig(sido) {

    return sigunguList.filter(sig => sig.sig.sig_full_nm.startsWith(sido));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}
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
        , [searchValue, currentPage]
    )

    return (
        <div>
            {postUser && <button className="write" onClick={() => navigate("./recruit")}>글쓰기</button>}
            <div className="main">
                <SearchBar Option={PetMomOptionBtn} />
            </div>


            {Array.isArray(petmomList) && petmomList.map(petmom => (
                <PetMomCard petmom={petmom} key={petmom.boardId} />
            ))}
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}




export default PetMomList;