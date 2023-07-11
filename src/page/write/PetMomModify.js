import React, { useEffect, useState } from "react";
import "./detail.css"
import { useDispatch, useSelector } from "react-redux";
import { putPetMomPage } from "../../api/petMomAPI";
import sigunguList from '../../data/sigoongu.json';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getPetMomDetail } from "../../api/petDetailAPI";

function searchSig(sido) {

    return sigunguList.filter(sig => sig.sig.sig_full_nm.startsWith(sido));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}

function PetMomModify() {
    const { boardId } = useParams();

    const [form, setform] = useState({
        boardId,
        boardTitle: '',
        location: '',
        care: '',
        startDate: '',
        endDate: '',
        hourlyRate: '',
        dateRate: '',
        houseType: '',
        otherCondition: [],
        petYN: '',
        signficant: '',
        request: '',
    });

    const petmomdetail = useSelector(state => state.petDetailReducer);

    // 시도 선택시 시군구 리스트 담음
    const [sigList, setSigList] = useState([]);

    const [location, setLocation] = useState({
        sido: '',
        sigungu: ''
    });
    const onChangeSidoHandler = (e) => {

        if (e.target.id === "sido")
            setSigList(searchSig(e.target.value));
        setLocation({
            ...location,
            [e.target.id]: e.target.value
        });
    };

    const modifypetMom = () => {
        dispatch(putPetMomPage(boardId, form));


    };


    const onChangeHandler = (e) => {

        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    useEffect(() => {
        setform({
            ...form,
            location: location.sido + " " + location.sigungu
        })
    }, [location]
    )

    const onChangeHandlerOther = (e) => {
        const value = e.target.value;
        const existingIndex = form.otherCondition.findIndex((item) => item.typeId === value.trim());

        if (existingIndex !== -1) {
            // 이미 선택된 값인 경우 제거
            const updatedOtherConditions = [...form.otherCondition];
            updatedOtherConditions.splice(existingIndex, 1);

            setform({
                ...form,
                otherCondition: updatedOtherConditions
            });
        } else if (value.trim() !== '') {
            // 새로운 값인 경우 추가
            setform({
                ...form,
                otherCondition: [
                    ...form.otherCondition,
                    {
                        typeId: value.trim()
                    }
                ]
            });
        }
    };

    const [images, setImages] = useState([]);
    const [images2, setImages2] = useState([]);
    const dispatch = useDispatch();
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedPetButton, setSelectedPetButton] = useState(null);
    const [selectedOtherButton, setSelectedOtherButton] = useState([]);

    const toggleSelected = (event) => {
        const buttonValue = event.target.value;
        setSelectedButton((prevSelectedButton) => {
            return prevSelectedButton !== buttonValue ? buttonValue : null;
        });
    };
    const toggleSelectedPet = (event) => {
        const buttonValue = event.target.value;
        setSelectedPetButton((prevSelectedButton) => {
            return prevSelectedButton !== buttonValue ? buttonValue : null;
        });
    };
    const toggleSelectedOther = (e) => {
        if (e.target.className.indexOf(" selected") >= 1) {
            e.target.className = e.target.className.replace(" selected", "")
        } else {
            e.target.className += " selected";
        }
    };

    useEffect(
        () => {
            dispatch(getPetMomDetail(boardId));

        },
        []
    )
    useEffect(
        () => {
            setform(petmomdetail)

        }, [petmomdetail]
    )
    console.log(petmomdetail)

    useEffect(
        () => {
            if (petmomdetail && petmomdetail.location) {
                const arr = petmomdetail.location.split(" ");
                setLocation({
                    sido: arr[0],
                    sigungu: arr[1],
                })
                setSigList(searchSig(arr[0]));
            }
        }, [petmomdetail]
    )

    const handleImageSelect = (event) => {
        const selectedImage = event.target.files[0];
        if (images.length < 1) {
            setImages([selectedImage]); // 선택된 이미지를 큰 이미지 배열에 저장
        } else if (images2.length < 3) {
            setImages2((prevImages) => [...prevImages, selectedImage]); // 선택된 이미지를 작은 이미지 배열에 추가
        }
    };

    return (
        <div className="height-auto">
            <div className="petsitterrecruitcontainer">
                <div className="buttoncontainer">
                    <div className="board">게시판</div>
                    <NavLink to="/petmom" className="insertwrite" onClick={modifypetMom}>
                        <button className="declarationButton">수정</button>
                    </NavLink>
                </div>

                <div className="yongdate">
                    <h3 className="writeryong">작성자 : {petmomdetail?.memberId?.nickname}</h3>
                    <div className="writedate">작성일 : {petmomdetail.boardDate}
                    </div>
                </div>
            </div>
            <hr className="line"></hr>

            <h2>펫맘 모집 게시판</h2>

            <hr className="line"></hr>
            <div className="inputname">
                <div>
                    제목
                </div>
                <input className="textinput" type="text" defaultValue={form.boardTitle} onChange={onChangeHandler} name="boardTitle" />
            </div>
            <hr className="line"></hr>

            <div>
                지역
                <select className="firstselect1" onChange={onChangeSidoHandler} id="sido" readOnly>
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
                    <select className="secondselect1" id="sigungu" onChange={onChangeSidoHandler} readOnly alue={location.sigungu}>
                        <option value="">시 / 군 / 구</option>
                        {sigList.map(sig => <Sigoon key={sig.id} sig={sig} />)}
                    </select>
                </div>
            </div>
            <hr className="line"></hr>

            <div>
                돌봄
                <button className="dolbombtn" onClick={onChangeHandler} name="care" value="방문">방문</button>
                <button className="dolbombtn" onClick={onChangeHandler} name="care" value="출장">출장</button>
                <button className="dolbombtn" onClick={onChangeHandler} name="care" value="산책">산책</button>
            </div>

            <hr className="line"></hr>
            <div className="datemoneygive">
                기간
                <input className="dateselect5" type="date" onChange={onChangeHandler} name="startDate" defaultValue={petmomdetail.startDate} /><div className="wave2">~</div><input className="dateselect6" type="date" name="endDate" defaultValue={petmomdetail.endDate} onChange={onChangeHandler} />
                <div className="park">
                    1박
                </div>
                <input className="moneygive12" type="text" onChange={onChangeHandler} name="dateRate" defaultValue={petmomdetail.dateRate} placeholder="사례금을 작성해 주세요." />
                <div className="time">
                    시간당
                </div>
                <input className="moneygive11" type="text" onChange={onChangeHandler} name="hourlyRate" defaultValue={petmomdetail.hourlyRate} placeholder="사례금을 작성해 주세요." />
            </div>
            <hr className="line10000"></hr>
            <div className="formsize">
                <div className="doginfo-petmom">
                    <div>
                        <h3 className="imagegogo">이미지첨부</h3>
                        <div>
                            {/* 이미지 업로드 버튼 */}
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleImageSelect}
                                disabled={images.length === 1 && images2.length === 3} // 큰 이미지가 1개이고 작은 이미지가 3개일 때 비활성화
                            />
                            <label htmlFor="imageUpload" className="plusbtn">
                                +
                            </label>

                            {/* 이미지 미리보기 */}
                            <div className="image-preview-container">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(image)}
                                        alt={`첨부 이미지 ${index}`}
                                        className="reviewmodal-image1"
                                    />
                                ))}
                            </div>
                            <div className="image-preview-container2">
                                {images2.map((image2, index) => (
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(image2)}
                                        alt={`첨부 이미지 ${index + 1}`}
                                        className="reviewmodal-image"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="momplz">
                    <div>
                        <div className="livecare">

                            <button className={`choice-box2 ${selectedButton === '단독주택' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelected(e); }} name="houseType" value="단독주택">단독주택</button>
                            <button className={`choice-box2 ${selectedButton === '아파트' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelected(e); }} name="houseType" value="아파트">아파트</button>
                            <button className={`choice-box2 ${selectedButton === '빌라' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelected(e); }} name="houseType" value="빌라">빌라</button>

                            <hr className="line2"></hr>

                            <button className={`choice-box2 ${selectedOtherButton === '픽업가능' ? 'selected' : ''}`} onClick={(e) => { onChangeHandlerOther(e); toggleSelectedOther(e); }} name="typeId" value={1} >픽업가능</button>
                            <button className={`choice-box2 ${selectedOtherButton === '대형견 가능' ? 'selected' : ''}`} onClick={(e) => { onChangeHandlerOther(e); toggleSelectedOther(e); }} name="typeId" value={2}>대형견 가능</button>
                            <button className={`choice-box2 ${selectedOtherButton === '노견케어' ? 'selected' : ''}`} onClick={(e) => { onChangeHandlerOther(e); toggleSelectedOther(e); }} name=" typeId" value={3}>노견케어</button>
                            <hr className="line2"></hr>
                            <button className={`choice-box3 ${selectedPetButton === "반려동물 있어요" ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelectedPet(e); }} name="petYN" value="반려동물 있어요" >반려동물 있어요</button>
                            <button className={`choice-box3 ${selectedPetButton === "반려동물 없어요" ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelectedPet(e); }} name="petYN" value="반려동물 없어요">반려동물 없어요</button>

                            <hr className="line2"></hr>
                        </div>
                        <div className="dateAndWriter">
                            <h2 className="signficanttext">특이사항</h2>
                            <input className="signficanttext" type="text" onChange={onChangeHandler} name="signficant" defaultValue={petmomdetail.signficant} />
                        </div>
                    </div>
                    <h2 className="caredog"> 강아지를 맡아줄게요</h2>
                    <textarea placeholder="내용을 입력해 주세요." className="dogwrite333" onChange={onChangeHandler} name="request" defaultValue={petmomdetail.request} />
                </div>
            </div>
            <div>
                <div className="endline2">
                    <hr className="line"></hr>
                </div>
            </div >
        </div>
    );
};
export default PetMomModify;
