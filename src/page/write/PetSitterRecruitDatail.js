import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPetSitterDetail } from "../../api/petDetailAPI";
import "../write/detail.css"
import PetSitterApply from "../../component/modal/apply/PetSitterApply";
import Modal from 'react-modal';
import { CLOSE_MODAL, OPEN_MODAL } from "../../modules/petSittermodal";
import PetSitterCollectCancle from '../../component/modal/collect/PetSitterCollectCancle';

function PetSitterRecruitDatail() {

    const { declaration: showModal, petsittercollectcancle, petsitterapply } = useSelector(state => state.modalsReducer);
    const dispatch = useDispatch();

    const openModal = (type) => {
        dispatch({ type: OPEN_MODAL, payload: type });
    };

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };
    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");

    };

    const openCollectCancleModal = () => {
        dispatch({ type: OPEN_MODAL, payload: "petsittercollectcancle" });
    };

    const petdetail = useSelector(state => state.petDetailReducer) || { images: [] };


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = petdetail.img ? petdetail.img.length : 0;

    useEffect(
        () => {
            dispatch(getPetSitterDetail());
        },
        []
    )

    const changeImage = (direction) => {
        let newIndex = currentImageIndex + direction;
        if (newIndex < 0) {
            newIndex = totalImages - 1; // 마지막 이미지로 순환
        } else if (newIndex >= totalImages) {
            newIndex = 0; // 첫 번째 이미지로 순환
        }
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="height-auto">
            <div className="dateAndWriter">
                <h1>게시판</h1>
                <button className="declarationButton">신고</button>
                <button className="declarationButton1" onClick={openCollectCancleModal}>모집취소</button>
                <Modal className="modal-backdrop" isOpen={petsittercollectcancle} onRequestClose={closeModal}>
                    <PetSitterCollectCancle />
                </Modal>
            </div>
            <div className="dateAndWriter">
                <h5>작성자 : {petdetail.name}</h5>
                <h5>작성일: {petdetail.date}</h5>
            </div>
            <hr className="line"></hr>
            <div className="images">
                <button className="imageBtn" onClick={() => changeImage(-1)}> &lt; </button>
                {petdetail.img && petdetail.img.length > 0 ? (
                    <img className='imgsize' src={petdetail.img[currentImageIndex]} alt=" 사진이 없습니다!" />
                ) : null}
                <button className="imageBtn" onClick={() => changeImage(1)}> &gt; </button>
            </div>
            <h2 className="text">{currentImageIndex + 1}/{totalImages}</h2>
            <div className="comment">
                <h2 className="comment-content" style={{ right: '4%' }}>게시판</h2>
                <h3 className="comment-content2" style={{ left: '13px' }} > 펫시터 모집  게시판</h3>
            </div>
            <hr className="line"></hr>
            <div className="comment">
                <h2 className="comment-content">제목 </h2>
                <h3 className="comment-content2" >{petdetail.title}</h3>
            </div>
            <hr className="line"></hr>
            <div className="comment">
                <h2 className="comment-content">지역</h2>
                <h3 className="comment-content2" >{petdetail.region}</h3>
            </div>
            <hr className="line"></hr>

            <div className="comment">
                <h2 className="comment-content">돌봄</h2>
                <button className="choice-box" onClick={toggleSelected}>방문</button>
                <button className="choice-box" onClick={toggleSelected}>출장</button>
                <button className="choice-box" onClick={toggleSelected}>산책</button>

            </div>
            <hr className="line"></hr>

            <div className="comment">
                <h2 className="comment-content">기간</h2>
                <h3 className="comment-content2" >{petdetail.date2}</h3>
                <h2 className="comment-content3">사례금</h2>
                <h3 className="comment-content4">{petdetail.dmoney}</h3>
            </div>
            <hr className="line"></hr>
            <div className="formsize">
                <div className="doginfo3">
                    <div className="size">
                        <button className="doginfo-button">이름</button>
                        <h3>{petdetail.name}</h3>
                    </div>
                    <hr className="line"></hr>
                    <div className="size">
                        <button className="doginfo-button">나이</button>
                        <h3>{petdetail.age}살</h3>
                    </div>
                    <hr className="line"></hr>
                    <div className="size">
                        <button className="doginfo-button">견종</button>
                        <h3>{petdetail.type}</h3>
                    </div>
                    <hr className="line"></hr>
                    <div className="size">
                        <button className="doginfo-button" >성별</button>
                        <h3>{petdetail.gender}</h3>
                        <button className="size-size">크기</button>
                        <h3 className="size-position">{petdetail.size}</h3>
                    </div>
                    <hr className="line"></hr>
                    <div className="doginfo2">
                        <button>특이사항</button>
                        <textarea value={petdetail.info}></textarea>
                    </div>
                </div>
                <div className="dogplz">
                    <h2>우리 강아지를 맡아주세요</h2>
                    <textarea value={petdetail.info}></textarea></div>
            </div>
            <div>
                <div className="endline2">
                    <hr className="line"></hr>

                    <button className="wantbtn2" onClick={() => openModal("petsitterApply")}>신청하기</button>

            <Modal className="modal-backdrop" isOpen={petsitterapply} onRequestClose={closeModal}>
                        <PetSitterApply />
                    </Modal>
                </div>
            </div >
        </div >
    );
};

export default PetSitterRecruitDatail;
