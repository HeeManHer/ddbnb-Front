import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLastedPetmom, getLastedPetsitter } from '../../api/mainAPI';
import '../../css/mainPage.css';

import LastedCard from "../../component/item/LastedCard";
import { RESET_PAGE } from '../../modules/currentPage';

function MainPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const petMom = useSelector(state => state.petMomReducer);
    const petSitter = useSelector(state => state.petSitterReducer);

    useEffect(
        () => {
            dispatch(getLastedPetmom());
            dispatch(getLastedPetsitter());
        },
        []
    )

    const goPetSitter = () => {
        dispatch({ type: RESET_PAGE });
        navigate("/petSitter");
    }

    const goPetMom = () => {
        dispatch({ type: RESET_PAGE });
        navigate("/petMom");
    }


    // const openModal = (location) => {

    //     let modal_width;
    //     let modal_height;

    //     switch (location) {
    //         case 'applicant':
    //             modal_width = '500';
    //             modal_height = '650';
    //             break;
    //         case 'postMessage':
    //             modal_width = '500';
    //             modal_height = '500';
    //             break;
    //     }
    //     console.log(modal_width, modal_height);
    //     const window_width = (window.screen.width - modal_width) / 2;
    //     const window_height = (window.screen.height - modal_height) / 2;

    //     const url = `/${location}`;
    //     const option = `width=${modal_width},height=${modal_height}, left=${window_width}, top=${window_height}, scrollbars=no`;

    //     window.open(url, location, option);
    // }

    return (
        <div className="mainPage">

            {/* <div>
                <button onClick={() => openModal('applicant')} > 신청자 목록</button>
                <button onClick={() => openModal('postMessage')} > 쪽지 확인</button>
            </div> */}

            <img src="/img/banner.png" alt="banner" className="banner center" />
            <div className="cardList">
                <div className='dis-flex justify-between align-center cardName'>
                    <span>{">"}최신 펫시터 모집글</span>
                    <button className="more back-color" onClick={goPetSitter} >더보기+</button>
                </div>
                <div className='card dis-flex justify-between'>
                    {Array.isArray(petSitter) && petSitter.map(item => <LastedCard key={item.no} category="petSitter" item={item} />)}
                </div>
            </div>
            <div className="cardList">
                <div className='dis-flex justify-between align-center cardName'>
                    <span>{">"}최신 펫맘 모집글</span>
                    <button className="more back-color" onClick={goPetMom} >더보기+</button>
                </div>
                <div className='card dis-flex justify-between'>
                    {Array.isArray(petMom) && petMom.map(item => <LastedCard key={item.no} category="petMom" item={item} />)}
                </div>
            </div>
        </div >
    )
}

export default MainPage;