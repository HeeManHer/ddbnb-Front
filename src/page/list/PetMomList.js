import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "../../css/petsitterList.css";
import sigunguList from '../../data/sigoongu.json';
import { useDispatch, useSelector } from "react-redux";
import "../../css/petmomList.css";
import PageBtn from "../../component/common/PageBtn";
import { getPetMomList } from "../../api/petMomAPI";

function searchSig(sido) {

    return sigunguList.filter(sig => sig.sig.sig_full_nm.startsWith(sido));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}
function PetMomList() {

    const dispatch = useDispatch();
    const { data: petmomList, pageInfo } = useSelector(state => state.petMomReducer);
    const currentPage = useSelector(state => state.pageReducer);

    const [searchValue, setSearchValue] = useState({
        location: '',
        startDate: '',
        endDate: '',
        petYN: '',
        otherCondition: '',

    });

    const handleSearch = () => {
        dispatch(getPetMomList(currentPage, searchValue));
    };

    useEffect(
        () => {
            dispatch(getPetMomList(currentPage, searchValue));
        }
        , [currentPage, searchValue]
    )
    const navigate = useNavigate();

    const onChangeList = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value

        });
    };

    const onChangeHandler = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value,
        });
    };

    // 시도 선택시 시군구 리스트 담음
    const [sigList, setSigList] = useState([]);

    // 시도 + 시군구 합치기
    const [location, setLocation] = useState({
        SIDO: '',
        SIGUNGU: ''
    });

    const onChangeSidoHandler = (e) => {
        setSigList(searchSig(e.target.value));
        setLocation({
            ...location,
            SIDO: e.target.value
        })

        setSearchValue({
            ...searchValue,

            location: e.target.value
        });
    }


    const onChangeSigunguHandler = (e) => {
        setLocation({
            ...location,
            SIGUNGU: e.target.value
        })

        setSearchValue({
            ...searchValue,
            location: location.SIDO + ' ' + e.target.value
        });
    }


    // const [selectedPetmom, setSelectedPetmom] = useState(null);

    // const handleClick = (petmom) => {
    //     setSelectedPetmom(petmom);
    // };


    console.log(searchValue);
    console.log(petmomList);
    // console.log(currentPage);
    return (
        <div>

            <button className="write" onClick={() => navigate("./recruit")}>글쓰기</button>
            <br />
            <div className="main">

                <div className="mainpagebox">
                    <div className="wherewhen">
                        <select className="firstselect" id="sigungu" onChange={onChangeSidoHandler} readOnly>
                            <option value="" >시/도</option>
                            <option value="서울" onClick={onChangeList}>서울특별시</option>
                            <option value="부산">부산광역시</option>
                            <option value="대구">대구광역시</option>
                            <option value="인천">인천광역시</option>
                            <option value="광주">광주광역시</option>
                            <option value="대전">대전광역시</option>
                            <option value="울산">울산광역시</option>
                            <option value="세종특별자치시">세종특별자치시</option>
                            <option value="경기도">경기도</option>
                            <option value="강원도">강원도</option>
                            <option value="충청북도">충청북도</option>
                            <option value="충청남도">충청남도</option>
                            <option value="전라북도">전라북도</option>
                            <option value="전라남도">전라남도</option>
                            <option value="경상북도">경상북도</option>
                            <option value="경상남도">경상남도</option>
                            <option value="제주특별자치도">제주특별자치도</option>
                        </select>

                        <div className="sidogu">
                            <select className="secondselect" id="sigungu" onChange={onChangeSigunguHandler} readOnly>
                                <option value="" >시 / 군 / 구 </option>
                                {sigList.map(sig => <Sigoon key={sig.id} sig={sig} />)}
                            </select>

                        </div>
                        <section>

                            <h4 className="when">언제 맡기길 원하시나요?</h4>
                            <div>
                                <input
                                    className="dateselect"
                                    type="date"
                                    name="startDate"
                                    value={searchValue.startDate}
                                    onChange={onChangeHandler}
                                />
                                ~
                                <input
                                    className="dateselect"
                                    type="date"
                                    name="endDate"
                                    value={searchValue.endDate}
                                    onChange={onChangeHandler}
                                /> </div>
                        </section>
                    </div>
                    <div>
                        <h4 className="title">원하는 조건을 선택하세요</h4>
                    </div>
                    <div className="btnlist">
                        <div className="doglistbtn">
                            <button className="petmombtn" name='petYN' value="반려동물 없어요" onClick={onChangeList}>반려동물 없음</button>
                            <button className="petmombtn" name='otherCondition' value="픽업가능" onClick={onChangeList}>픽업 가능</button>
                            <button className="petmombtn" name='otherCondition' value="대형견 가능" onClick={onChangeList}>대형견 가능</button>
                            <button className="petmombtn" name='otherCondition' value="노견케어" onClick={onChangeList}>노견 케어</button>

                        </div>
                    </div>

                </div>
            </div>


            {Array.isArray(petmomList) && petmomList.map(petmom => (
                <div key={petmom.boardId} onClick={() => navigate(`./${petmom.boardId}`)}>
                    <div className="in" /*onClick={handleItemClick}*/ >

                        <img className="dogimg" src="../img/angrydog.png"></img>

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
                                    {/* <img className="star" src="../img/star.png"></img> */}
                                    <div className="divbtn flex-column">
                                        <div>{petmom.dateRate}￦
                                            <button>1박</button>
                                        </div>
                                        <div>{petmom.hourlyRate}￦
                                            <button>시간당</button>
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
