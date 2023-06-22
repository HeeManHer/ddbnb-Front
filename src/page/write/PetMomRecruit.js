import React, { useState } from "react";
import Calendar from "../../component/item/Calendar";
import "./detail.css"
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, OPEN_MODAL } from "../../modules/petSittermodal";
import RegistPost from "../../component/modal/post/RegistPost";
import CancelPost from "../../component/modal/post/CancelPost";
import { postPetMomPage } from "../../api/petMomAPI";
import sigunguList from '../../data/sigoongu.json';

function searchSig(sido) {

    return sigunguList.filter(sig => sig.sig.sig_full_nm.startsWith(sido));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}

function PetMomRecruit() {

    const [form, setform] = useState({
        boardTitle: '',
        location: '',
        care: '',
        startDate: '',
        endDate: '',
        hourlyRate: '',
        dateRate: '',
        houseType: '',
        //otherCondition
        petYN: '',
        signficant: '',
        request: ''
    });

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

    const [images, setImages] = useState([]);
    const [images2, setImages2] = useState([]);

    const { registpost, canclepost } = useSelector(state => state.modalsReducer);
    const dispatch = useDispatch();

    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");
    };


    const openModal = (type) => {
        dispatch({ type: OPEN_MODAL, payload: type });
    };

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };


    const registPetMom = () => {
        console.log("registPetMom");
        dispatch(postPetMomPage(form));

    };




    const [inputmoney1, setInputmoney1] = useState(""); // 초기값은 빈 문자열로 설정

    const handleDatetimeChange = (event) => {
        const selectedIndex = event.target.selectedIndex; // 선택된 옵션의 인덱스 가져오기
        const selectedOption = event.target.options[selectedIndex]; // 선택된 옵션 가져오기
        const selectedValue = selectedOption.value; // 선택된 옵션의 값 가져오기
        const selectedText = selectedOption.text; // 선택된 옵션의 텍스트 가져오기

        setInputmoney1(selectedValue); // inputmoney1 업데이트
    };

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
                    <button className="insertwrite" onClick={() => openModal("registpost")}>등록</button>
                    <Modal className="modal-backdrop" isOpen={registpost} onRequestClose={closeModal}>
                        <RegistPost registpetsitter={registPetMom} />
                    </Modal>
                    <button onClick={() => openModal("canclepost")}>취소</button>
                    <Modal className="modal-backdrop" isOpen={canclepost} onRequestClose={closeModal}>
                        <CancelPost />
                    </Modal>
                </div>

                <div className="yongdate">

                    <h3 className="writeryong">작성자 : 김용민</h3>
                    <div className="writedate">작성일 : 2023-05-18
                    </div>
                </div>
            </div>
            <hr className="line"></hr>

            <div className="petsitterrecruitwrite">게시판
                <h2>펫시터 모집 게시판</h2>
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
            </div>
            <hr className="line"></hr>

            <div>
                돌봄
                <button className="dolbombtn">방문</button>
                <button className="dolbombtn">출장</button>
                <button className="dolbombtn">산책</button>
            </div>

            <hr className="line"></hr>
            <div>
                기간
                <input className="dateselect1" type="date" />~<input className="dateselect2" type="date" />
                사례금
                <input className="moneygive" type="text" placeholder="사례금을 작성해 주세요." />
            </div>

            {/* <select className="datetime">
                        <option value="">요일/시간</option>
                        <option value="">1박</option>
                        <option value="">시간</option>
                    </select> */}

            <hr className="line"></hr>
            <div className="formsize">
                <div className="doginfo">
                    <div className="imgAndBtn">
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
                        <button className="choice-box2" onClick={toggleSelected}>단독주택</button>
                        <button className="choice-box2" onClick={toggleSelected}>아파트</button>
                        <button className="choice-box2" onClick={toggleSelected}>빌라</button>
                        <hr className="line2"></hr>
                        <button className="choice-box2" onClick={toggleSelected}>픽업가능</button>
                        <button className="choice-box2" onClick={toggleSelected}>대형견 가능</button>
                        <button className="choice-box2" onClick={toggleSelected}>노견케어</button>
                        <hr className="line2"></hr>
                        <button className="choice-box3" onClick={toggleSelected}>반려동물 있어요</button>
                        <button className="choice-box3" onClick={toggleSelected}>반려동물 없어요</button>
                        <hr className="line2"></hr>
                        <div className="dateAndWriter">
                            <h2>특이사항</h2>
                            <textarea className="momplz-textarea1">저희는 단독 주택이여서 편하게 반려동물을
                                맡아 드릴 수 있는 환경입니다.</textarea>
                        </div>
                    </div>
                    <h2> 강아지를 맡아줄게요</h2>
                    <textarea className="momplz-textarea2">저는 많은 아이들을 맡아본 경험이 있습니다. 믿고 맡겨주세요</textarea>
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
