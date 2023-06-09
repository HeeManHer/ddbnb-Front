// import React from "react";
import Calendar from "../../component/item/Calendar";
import "./detail.css"
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, OPEN_MODAL } from "../../modules/petSittermodal";
import React, { useState } from "react";
import RegistPost from "../../component/modal/post/RegistPost";
import CancelPost from "../../component/modal/post/CancelPost";

function PetMomRecruit() {
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
                        <RegistPost />
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
                <select className="firstselect">
                    <option value="">펫시터 모집 게시판</option>
                </select>
            </div>

            <hr className="line"></hr>
            <div className="inputname">
                <div>
                    제목
                </div>
                <input className="textinput" type="text" placeholder="제목을 입력해 주세요." />
                {/* <textarea placeholder="제목을 입력해 주세요." /> */}
            </div>
            <hr className="line"></hr>
            <div>
                지역
                <select className="firstselect">
                    <option value="">시/도</option>
                </select>
                <select className="secondselect">
                    <option value="">시/군/구</option>
                </select>
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
