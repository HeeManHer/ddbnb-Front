
import "../../css/petsitterrecruit.css";
import "./detail.css"
import Modal from 'react-modal';
import React, { useState } from "react";
import RegistPost from "../../component/modal/post/RegistPost";
import CancelPost from "../../component/modal/post/CancelPost";
import { CLOSE_MODAL, OPEN_MODAL } from "../../modules/petSittermodal";
import { useDispatch, useSelector } from "react-redux";
import { registPetsitterAPI } from "../../api/petsitterAPI";
import sigunguList from '../../data/sigoongu.json';
import "../../css/petsitterList.css";


function searchSig(sido) {

    return sigunguList.filter(sig => sig.sig.sig_full_nm.startsWith(sido));
}

function Sigoon({ sig }) {

    return <option value={sig.sig.sig_kor_nm} >{sig.sig.sig_kor_nm}</option>;
}


function PetSitterRecruit() {

    const [form, setform] = useState({
        boardTitle: '',
        location: '',
        care: '',
        startDate: '',
        endDate: '',
        rate: '',
        petName: '',
        petAge: '',
        petShape: '',
        petGender: '',
        petSize: '',
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



    const [selectedImage, setSelectedImage] = useState(null);

    const { registpost: showModal, canclepost } = useSelector(state => state.modalsReducer);
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


    const regpetsitter = () => {
        console.log("regpetsitter");
        dispatch(registPetsitterAPI(form));

    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="petsitterrecruitcontainer">



            <div className="buttoncontainer">
                <div className="board">게시판</div>
                <button className="insertwrite" onClick={() => openModal("registpost")}>등록</button>
                <Modal className="modal-backdrop" isOpen={showModal} onRequestClose={closeModal}>
                    <RegistPost registpetsitter={regpetsitter} />
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

            <hr className="line"></hr>

            <div className="smallcontainer">
                <div className="littlebitsmall">

                    <div>
                        <div className="petsitterrecruitwrite">게시판
                            <select className="firstselect">
                                <option value="">펫시터 모집 게시판</option>
                            </select>
                        </div>
                        <hr className="line"></hr>
                    </div>

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

                    <hr className="line"></hr>

                    <div className="imgbtndiv">
                        <div className="image-container">
                            {selectedImage && (
                                <img
                                    src={selectedImage}
                                    alt="첨부된 이미지"
                                    className="attached-image"
                                />
                            )}
                            <div>
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>

                        <div >
                            <div className="abc">
                                <button className="petsitterrecruitbtn">이름</button>
                                <input className="cruittext" type="text" />
                                <hr className="line"></hr>
                            </div>
                            <div className="abc">
                                <button className="petsitterrecruitbtn">나이</button>
                                <input className="cruittext" type="text" />
                                <hr className="line"></hr>
                            </div>

                            <div className="abc">
                                <button className="petsitterrecruitbtn">견종</button>
                                <input className="cruittext" type="text" />

                                <hr className="line"></hr>
                            </div>

                            <div className="gender">
                                성별
                                <select className="firstselect1">
                                    <option value="">남/여</option>
                                    <hr className="line"></hr>
                                </select>
                                크기
                                <select className="secondselect1">
                                    <option value="">소/중/대</option>
                                    <hr className="line"></hr>
                                </select>
                                <hr className="line"></hr>
                            </div>
                            <div className="acb">
                                <button className="significantbtn">특이사항</button>
                                <input className="significant" type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="dogdog">
                        우리 강아지를 맡아주세요
                    </div>
                    <textarea placeholder="내용을 입력해 주세요." className="dogwrite">

                    </textarea>
                </div>
            </div>
        </div>




    );
}

export default PetSitterRecruit;