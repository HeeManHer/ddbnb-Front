
import "../../css/petsitterrecruit.css";
import "./detail.css"
import Modal from 'react-modal';
import React, { useEffect, useState } from "react";
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

    const [form, setForm] = useState({
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
        setForm({
            ...form,
            location: location.sido + " " + location.sigungu
        })
    }, [location]
    )

    const onChangeHandler = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    console.log(form);


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
                    <RegistPost regist={regpetsitter} />
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
                        <input className="textinput" vlaue={form.boardTitle} onChange={onChangeHandler} name="boardTitle" type="text" placeholder="제목을 입력해 주세요." />
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
                        사례금
                        <input className="moneygive" type="text" onChange={onChangeHandler} name="rate" value={form.rate} placeholder="사례금을 작성해 주세요." />
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
                                <input className="cruittext" type="text" onChange={onChangeHandler} name="petName" value={form.petName} />
                                <hr className="line"></hr>
                            </div>
                            <div className="abc">
                                <button className="petsitterrecruitbtn">나이</button>
                                <input className="cruittext" type="text" onChange={onChangeHandler} name="petAge" value={form.petAge} />
                                <hr className="line"></hr>
                            </div>

                            <div className="abc">
                                <button className="petsitterrecruitbtn" >견종</button>
                                <input className="cruittext" type="text" onChange={onChangeHandler} name="petShape" value={form.petShape} />

                                <hr className="line"></hr>
                            </div>

                            <div className="gender">
                                성별
                                <select className="firstselect1" onChange={onChangeHandler} name="petGender" value={form.petGender}>
                                    <option value="" >남/여</option>
                                    <option value="남">남</option>
                                    <option value="여">여</option>
                                    <hr className="line"></hr>
                                </select>
                                크기
                                <select className="secondselect1" onChange={onChangeHandler} name="petSize" value={form.petSize}>
                                    <option value="">소/중/대   </option>
                                    <option value="소형">소형</option>
                                    <option value="중형">중형</option>
                                    <option value="대형">대형</option>
                                    <hr className="line"></hr>
                                </select>
                                <hr className="line"></hr>
                            </div>
                            <div className="acb">
                                <button className="significantbtn">특이사항</button>
                                <input className="significant" type="text" onChange={onChangeHandler} name="signficant" value={form.applicant} />
                            </div>
                        </div>
                    </div>

                    <div className="dogdog">
                        우리 강아지를 맡아주세요
                    </div>
                    <textarea placeholder="내용을 입력해 주세요." className="dogwrite" onChange={onChangeHandler} name="request" value={form.request}>

                    </textarea>
                </div>
            </div>
        </div>




    );
}

export default PetSitterRecruit;