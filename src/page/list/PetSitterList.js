import "../../css/petsitterList.css";
import { useNavigate, useParams } from "react-router-dom";
import { callPetsitterListAPI } from "../../api/petsitterAPI";
import sigunguList from '../../data/sigoongu.json';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PageBtn from "../../component/common/PageBtn";

function searchSig(sido) {

    return sigunguList.filter(sig => sig.sig.sig_full_nm.startsWith(sido));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}



function PetSitterList() {

    const dispatch = useDispatch();
    const { data: petsitterList, pageInfo } = useSelector(state => state.petSitterReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const [searchValue, setSearchValue] = useState({})

    console.log(petsitterList);
    useEffect(
        () => {
            dispatch(callPetsitterListAPI(currentPage, searchValue));
        }
        , []
    )


    const navigate = useNavigate()

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
    }

    const onChangeSigunguHandler = (e) => {
        setLocation({
            ...location,
            SIGUNGU: e.target.value
        })
    }
    const [selectedPetsitter, setSelectedPetsitter] = useState(null);

    const handleClick = (petsitter) => {
        setSelectedPetsitter(petsitter);
    };

    return (
        <div>


            <button className="write" onClick={() => navigate("./recruit")}>글쓰기</button>
            <br />
            <div className="main">

                <div className="mainpagebox">
                    <div className="wherewhen">

                        <h4 className="where">어디에 사시나요?</h4>
                        <select className="firstselect" id="sigungu" onChange={onChangeSidoHandler} readOnly>
                            <option value="">시/도</option>
                            <option value="서울">서울특별시</option>
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
                                <option value="">시 / 군 / 구</option>
                                {sigList.map(sig => <Sigoon key={sig.id} sig={sig} />)}
                            </select>

                        </div>
                        <section>
                            <h4 className="when">언제 맡기길 원하시나요?</h4>
                            <div>
                                <input className="dateselect" type="date" />~<input className="dateselect" type="date" />
                            </div>
                        </section>
                    </div>
                    <div>
                        <h4 className="title">원하는 조건을 선택하세요</h4>
                    </div>
                    <div className="btnlist">
                        <div className="doglistbtn">
                            <button className="petmombtn">소/중형견</button>
                            <button className="petmombtn">대형견</button>
                            <button className="petmombtn">산책</button>
                            <button className="petmombtn">방문/출장</button>
                        </div>
                        <button className="searchinfo">
                            <img src="../img/readingglasses.png"></img>
                            검색
                        </button>
                    </div>

                </div>
                <h5 className="statecheck">최신순  평점순  리뷰순 <img src="../img/check.png" /></h5>
            </div>

            {Array.isArray(petsitterList) && petsitterList.map(petsitter => (

                <div className="in" key={petsitter.boardId} onClick={() => navigate(`./${petsitter.boardId}`)}>

                    <img className="dogimg" src="../img/angrydog.png"></img>
                    <div className="textlist">
                        <div className="wheretext">
                            <div>{petsitter.location}</div>
                            <div>{petsitter.boardDate}</div>
                        </div>
                        <div>
                            <div>{petsitter.boardTitle}</div>
                            <hr className="line"></hr>
                        </div>
                        <div className="columncss">
                            <div>{petsitter.petSize},{petsitter.care}</div>
                            <div>기간: {petsitter.startDate} ~ {petsitter.endDate}</div>
                            <div className="stardivbtn">
                                <div className="star">★★★★★</div>
                                {/* <img className="star" src="../img/star.png"></img> */}
                                <div className="divbtn">
                                    <div>사례 : {petsitter.rate}</div>
                                    <button>모집중</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <PageBtn />
        </div>
    )
}

export default PetSitterList;