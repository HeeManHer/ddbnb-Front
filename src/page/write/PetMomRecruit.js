import React, { useEffect, useState } from "react";
import Calendar from "../../component/item/Calendar";
import "./detail.css"
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, OPEN_MODAL } from "../../modules/petSittermodal";
import RegistPost from "../../component/modal/post/RegistPost";
import CancelPost from "../../component/modal/post/CancelPost";
import { postPetMomPage, putPetMomPage } from "../../api/petMomAPI";
import sigunguList from '../../data/sigoongu.json';

function searchSig(sido) {

    return sigunguList.filter(sig => sig.sig.sig_full_nm.startsWith(sido));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}

function PetMomRecruit() {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    const [form, setform] = useState({
        boardTitle: '',
        boardCategory: '펫맘 모집 게시판',
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
        member: { memberId: token.memberId }
    });



    // 시도 선택시 시군구 리스트 담음
    const [sigList, setSigList] = useState([]);

    const [location, setLocation] = useState({
        sido: '',
        sigungu: ''
    });
    const onChangeSidoHandler = (e) => {

        if (e.target.id == "sido")
            setSigList(searchSig(e.target.value));
        setLocation({
            ...location,
            [e.target.id]: e.target.value
        });
    };
    useEffect(() => {
        setform({
            ...form,
            location: location.sido + " " + location.sigungu
        })
    }, [location]
    )
    const onChangeHandler = (e) => {

        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };
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



    console.log(form)

    const [image, setImage] = useState();
    const [imagesUrl, setImagesUrl] = useState([]);
    const [images, setImages] = useState([]);

    const handleImageSelect = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage); // 선택된 이미지를 큰 이미지 배열에 저장
    };

    useEffect(
        () => {
            // 이미지 업로드시 미리보기 세팅
            if (image) {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        setImagesUrl([result, ...imagesUrl]);
                    }
                }
                fileReader.readAsDataURL(image);
                if (images.length < 4) {
                    setImages([...images, image]);
                }
            }
        }, [image]
    );

    const { registpost: showModal, canclepost } = useSelector(state => state.modalsReducer);
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




    const openModal = (type) => {
        dispatch({ type: OPEN_MODAL, payload: type });
    };

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };


    const registPetMom = () => {

        const formData = new FormData();

        formData.append('newPetMom', new Blob([JSON.stringify(form)], { type: "application/json" }))

        if (images) {
            for (let index in images) {
                formData.append("image", images[index])
            }
        }

        dispatch(postPetMomPage(formData));

    };




    const [inputmoney1, setInputmoney1] = useState(""); // 초기값은 빈 문자열로 설정

    const handleDatetimeChange = (event) => {
        const selectedIndex = event.target.selectedIndex; // 선택된 옵션의 인덱스 가져오기
        const selectedOption = event.target.options[selectedIndex]; // 선택된 옵션 가져오기
        const selectedValue = selectedOption.value; // 선택된 옵션의 값 가져오기
        const selectedText = selectedOption.text; // 선택된 옵션의 텍스트 가져오기

        setInputmoney1(selectedValue); // inputmoney1 업데이트
    };

    return (
        <div className="height-auto">
            <div className="petsitterrecruitcontainer">



                <div className="buttoncontainer">
                    <div className="board">게시판</div>
                    <button className="insertwrite" onClick={() => openModal("registpost")}>등록</button>
                    <button className="insertwriter">수정</button>
                    <Modal className="modal-backdrop" isOpen={showModal} onRequestClose={closeModal}>
                        <RegistPost regist={registPetMom} />
                    </Modal>
                    <button onClick={() => openModal("canclepost")}>취소</button>
                    <Modal className="modal-backdrop" isOpen={canclepost} onRequestClose={closeModal}>
                        <CancelPost />
                    </Modal>
                </div>

                <div className="yongdate">

                    <h3 className="writeryong">작성자 : {form.nickname}</h3>
                    <div className="writedate">작성일 : {form.boardDate}
                    </div>
                </div>
            </div>
            <hr className="line"></hr>

            <div className="petsitterrecruitwrite">게시판
                <h2>펫맘 모집 게시판</h2>
            </div>

            <hr className="line"></hr>
            <div className="inputname">
                <div>
                    제목
                </div>
                <input className="textinput" type="text" value={form.boardTitle} onChange={e => setform({ ...form, boardTitle: e.target.value })} placeholder="제목을 입력해 주세요." ></input>
                {/* <textarea placeholder="제목을 입력해 주세요." /> */}
            </div>
            <hr className="line"></hr>


            <div>
                지역
                <select className="firstselect" onChange={onChangeSidoHandler} id="sido" readOnly>
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
                    <select className="secondselect" id="sigungu" onChange={onChangeSidoHandler} readOnly>
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
            <div>
                기간
                <input className="dateselect1" type="date" onChange={onChangeHandler} name="startDate" value={form.startDate} />~<input className="dateselect2" type="date" name="endDate" value={form.endDate} onChange={onChangeHandler} />
                1박
                <input className="moneygive" type="text" onChange={onChangeHandler} name="dateRate" value={form.dateRate} placeholder="사례금을 작성해 주세요." />
                시간당
                <input className="moneygive" type="text" onChange={onChangeHandler} name="hourlyRate" value={form.hourlyRate} placeholder="사례금을 작성해 주세요." />
            </div>


            <hr className="line"></hr>
            <div className="formsize">
                <div className="doginfo-petmom">
                    <div>
                        <h3 className="imagegogo">이미지첨부</h3>
                        <div>
                            {/* 이미지 업로드 버튼 */}
                            <input
                                type="file"
                                id="imageUpload"
                                accept='image/jpg,image/png,image/jpeg,image/gif'
                                style={{ display: "none" }}
                                onChange={handleImageSelect}
                                disabled={images.length === 4} // 큰 이미지가 1개이고 작은 이미지가 3개일 때 비활성화
                            />
                            <label htmlFor="imageUpload" className="plusbtn" style={images.length >= 4 ? { display: 'none' } : null}>
                                +
                            </label>

                            {/* 이미지 미리보기 */}
                            <div className="image-preview-container">
                                <img
                                    key='0'
                                    src={imagesUrl[0]}
                                    alt='첨부 이미지'
                                    className="reviewmodal-image1"
                                    style={images.length == 0 ? { display: 'none' } : null}
                                />
                            </div>
                            <div className="image-preview-container2">
                                {imagesUrl.map((url, index) => index !== 0 && (
                                    <img
                                        key={index}
                                        src={url}
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

                        <button className={`choice-box2 ${selectedButton === '단독주택' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelected(e); }} name="houseType" value="단독주택">단독주택</button>
                        <button className={`choice-box2 ${selectedButton === '아파트' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelected(e); }} name="houseType" value="아파트">아파트</button>
                        <button className={`choice-box2 ${selectedButton === '빌라' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelected(e); }} name="houseType" value="빌라">빌라</button>



                        <hr className="line2"></hr>

                        <button className={`choice-box2 ${selectedOtherButton === '픽업가능' ? 'selected' : ''}`} onClick={(e) => { onChangeHandlerOther(e); toggleSelectedOther(e); }} name="typeId" value={1} >픽업가능</button>
                        <button className={`choice-box2 ${selectedOtherButton === '대형견 가능' ? 'selected' : ''}`} onClick={(e) => { onChangeHandlerOther(e); toggleSelectedOther(e); }} name="typeId" value={2}>대형견 가능</button>
                        <button className={`choice-box2 ${selectedOtherButton === '노견케어' ? 'selected' : ''}`} onClick={(e) => { onChangeHandlerOther(e); toggleSelectedOther(e); }} name=" typeId" value={3}>노견케어</button>
                        <hr className="line2"></hr>
                        <button className={`choice-box2 ${selectedPetButton === "반려동물 있어요" ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelectedPet(e); }} name="petYN" value="반려동물 있어요" >반려동물 있어요</button>
                        <button className={`choice-box2 ${selectedPetButton === "반려동물 없어요" ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleSelectedPet(e); }} name="petYN" value="반려동물 없어요">반려동물 없어요</button>


                        <hr className="line2"></hr>
                        <div className="dateAndWriter">
                            <h2>특이사항</h2>
                            <input className="significant" type="text" onChange={onChangeHandler} name="signficant" />

                        </div>
                    </div>
                    <h2> 강아지를 맡아줄게요</h2>
                    <textarea placeholder="내용을 입력해 주세요." className="dogwrite" onChange={onChangeHandler} name="request" />
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
export default PetMomRecruit;
