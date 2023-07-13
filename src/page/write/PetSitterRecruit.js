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
    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    const [form, setForm] = useState({
        boardTitle: '',
        boardCategory: '펫시터 모집 게시판',
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
        significant: '',
        request: '',
        member: { memberId: token.memberId }
    });

    // 시도 선택시 시군구 리스트 담음
    const [sigList, setSigList] = useState([]);

    // 시도 + 시군구 합치기
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

    useEffect(() => {
        setForm({
            ...form,
            location: location.sido + " " + location.sigungu
        })
    }, [location]
    )

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        const currentValue = form[name];

        if (currentValue === value) {
            setForm({ ...form, [name]: '' });
        } else {
            setForm({ ...form, [name]: value });
        };
    }

    const { registpost: showModal, canclepost } = useSelector(state => state.modalsReducer);

    const dispatch = useDispatch();

    const openModal = (type) => {
        dispatch({ type: OPEN_MODAL, payload: type });
    };

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };


    const regpetsitter = () => {

        const formData = new FormData();

        formData.append('newPetSitter', new Blob([JSON.stringify(form)], { type: "application/json" }))

        if (images) {
            for (let index in images) {
                formData.append("image", images[index])
            }
        }
        dispatch(registPetsitterAPI(formData));

    };


    const [selectedCareButton, setSelectedCareButton] = useState(null);
    const [image, setImage] = useState();
    const [imagesUrl, setImagesUrl] = useState([]);
    const [images, setImages] = useState([]);


    const handleImageSelect = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage); // 선택된 이미지를 큰 이미지 배열에 저장
    };

    const toggleCareSelected = (event) => {
        const buttonValue = event.target.value;
        setSelectedCareButton((prevSelectedButton) => {
            return prevSelectedButton !== buttonValue ? buttonValue : null;
        });
    };
    useEffect(
        () => {
            // 이미지 업로드시 미리보기 세팅
            if (image) {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        setImagesUrl([...imagesUrl, result]);
                    }
                }
                fileReader.readAsDataURL(image);
                if (images.length < 4) {
                    setImages([...images, image]);
                }
            }
        }, [image]
    );
    console.log(form)
    console.log(images);
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

            </div>

            <hr className="line"></hr>

            <div className="smallcontainer">
                <div className="littlebitsmall">

                    <div>
                        <h2>펫시터 모집 게시판</h2>
                    </div>
                    <hr className="line"></hr>
                </div>

                <div className="inputname">
                    <div>
                        제목
                    </div>
                    <input className="textinput" vlaue={form.boardTitle} onChange={onChangeHandler} name="boardTitle" type="text" placeholder="제목을 입력해 주세요." />
                </div>

                <hr className="line"></hr>

                <div>
                    지역
                    <select className="firstselect1" onChange={onChangeSidoHandler} id="sido" readOnly>
                        <option value="">시/도</option>
                        <option value="서울특별시">서울특별시</option>
                        <option value="부산광역시">부산광역시</option>
                        <option value="대구광역시">대구광역시</option>
                        <option value="인천광역시">인천광역시</option>
                        <option value="광주광역시">광주광역시</option>
                        <option value="대전광역시">대전광역시</option>
                        <option value="울산광역시">울산광역시</option>
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
                        <select className="secondselect1" id="sigungu" onChange={onChangeSidoHandler} readOnly>
                            <option value="">시 / 군 / 구</option>
                            {sigList.map(sig => <Sigoon key={sig.id} sig={sig} />)}
                        </select>
                    </div>
                </div>

                <hr className="line"></hr>
                <div>
                    <button className={`dolbombtn ${selectedCareButton === '방문' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleCareSelected(e); }} name="care" value="방문">방문</button>
                    <button className={`dolbombtn ${selectedCareButton === '출장' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleCareSelected(e); }} name="care" value="출장">출장</button>
                    <button className={`dolbombtn ${selectedCareButton === '산책' ? 'selected' : ''}`} onClick={(e) => { onChangeHandler(e); toggleCareSelected(e); }} name="care" value="산책">산책</button>
                </div>

                <hr className="line"></hr>

                <div className="moneydate">
                    기간
                    <input className="dateselect5" type="date" onChange={onChangeHandler} name="startDate" value={form.startDate} /><div className="wave3">~</div><input className="dateselect6" type="date" name="endDate" value={form.endDate} onChange={onChangeHandler} />
                    <div className="givemoney">
                        사례금
                    </div>
                    <input className="moneygive" type="text" onChange={onChangeHandler} name="rate" value={form.rate} placeholder="사례금을 작성해 주세요." />
                </div>

                <hr className="line123"></hr>

                <div className="imgbtndiv">

                    <div className="image-container">
                        <div>
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/jpg,image/png,image/jpeg,image/gif"
                                onChange={handleImageSelect}
                                disabled={images.length === 4}
                            />
                        </div>
                        <div className="image-preview-container2">
                            {imagesUrl.slice(1).map((url, index) => ( // 이미지 배열에서 첫 번째 이미지를 제외한 나머지 이미지를 사용
                                <img
                                    key={index}
                                    src={url}
                                    alt={`첨부 이미지 ${index + 2}`} // index + 2로 수정하여 첨부 이미지 1부터 시작하도록 설정
                                    className="attached-image small-image" // 모든 이미지에 작은 크기로 적용
                                />
                            ))}
                            {imagesUrl.length > 0 && ( // 이미지가 적어도 1장 이상일 때만 첫 번째 이미지를 추가
                                <img
                                    src={imagesUrl[0]}
                                    alt="첨부 이미지 1"
                                    className="attached-image big-image" // 첨부 이미지 1에 큰 크기 적용
                                />
                            )}
                        </div>
                    </div>
                    <div className="abc123">
                        <div className="abc">
                            <button className="petsitterrecruitbtn">이름</button>
                            <input className="cruittext" type="text" onChange={onChangeHandler} name="petName" defaultValue={form.petName} />
                            <hr className="line"></hr>
                        </div>
                        <div className="abc">
                            <button className="petsitterrecruitbtn">나이</button>
                            <input className="cruittext" type="text" onChange={onChangeHandler} name="petAge" defaultValue={form.petAge} />
                            <hr className="line"></hr>
                        </div>

                        <div className="abc">
                            <button className="petsitterrecruitbtn" >견종</button>
                            <input className="cruittext" type="text" onChange={onChangeHandler} name="petShape" defaultValue={form.petShape} />

                            <hr className="line"></hr>
                        </div>

                        <div className="gender">
                            성별
                            <select className="firstselect5" onChange={onChangeHandler} name="petGender" defaultValue={form.petGender}>
                                <option value="" >남/여</option>
                                <option value="남">남</option>
                                <option value="여">여</option>
                            </select>
                            크기
                            <select className="secondselect2" onChange={onChangeHandler} name="petSize" defaultValue={form.petSize}>
                                <option value="">소/중/대   </option>
                                <option value="소형">소형</option>
                                <option value="중형">중형</option>
                                <option value="대형">대형</option>
                            </select>
                            <hr className="line"></hr>
                        </div>
                        <div className="acb">
                            <button className="significantbtn">특이사항</button>
                            <textarea className="significant" type="textarea" onChange={onChangeHandler} name="significant" defaultValue={form.applicant} />
                        </div>
                    </div>
                </div>

                <div className="dogdog">
                    우리 강아지를 맡아주세요
                </div>
                <textarea placeholder="내용을 입력해 주세요." className="dogwrite" onChange={onChangeHandler} name="request" defaultValue={form.request}>

                </textarea>
            </div>
        </div>




    );
}

export default PetSitterRecruit;