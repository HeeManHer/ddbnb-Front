
import { useNavigate, useParams } from "react-router-dom";
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
        , [currentPage, searchValue]
    )

    return (
        <div>
            {postUser && <button className="write" onClick={() => navigate("./recruit")}>글쓰기</button>}
            <div className="main">
                <SearchBar Option={PetMomOptionBtn} />
            </div>


            {Array.isArray(petmomList) && petmomList.map(petmom => (
                <div key={petmom.boardId} onClick={() => navigate(`./${petmom.boardId}`)}>
                    <div
                        className={`in ${petmom.momStatus === '모집취소' ? 'gray' : ''}`}
                        style={petmom.momStatus === '모집취소' ? { backgroundColor: "#9D9D9D" } : {}}
                        onClick={() => navigate(`./${petmom.boardId}`)}
                    >
                        <img className="dogimg" src={petmom?.boardImage[0]?.imageUrl} />

                        <div className="textlist">
                            <div className="wheretext">
                                <div className="dis-flex">{petmom.location}</div>
                                <div>{petmom.boadrDate}</div>
                            </div>
                            <div>
                                <h2>{petmom.boardTitle}</h2>
                                <hr className="line"></hr>
                            </div>
                            <div className="columncss">

                                <div>{petmom.houseType} {petmom.petYN} {petmom.care}</div>
                                <div>기간: {petmom.startDate} ~ {petmom.endDate}</div>
                                <div className="stardivbtn">
                                    <div className="dis-flex">
                                    </div>
                                    <div className="starpoint-size ">
                                        <StarPoint starPoint={petmom.member?.starPoint} />
                                    </div>
                                    <div className="divbtn flex-column">
                                        <div>{petmom.dateRate}￦
                                            <button>하루당</button>
                                        </div>
                                        <div>{petmom.hourlyRate}￦
                                            <button>시간당</button>
                                            <div className="button-w">
                                                <button className="section1">{petmom.momStatus}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            ))}
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}




export default PetMomList;