import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLastedPetmom, getLastedPetsitter } from '../../api/mainAPI';
import '../../css/mainPage.css';

import LastedCard from "../../component/item/LastedCard";
import { RESET_PAGE } from '../../modules/currentPage';

function MainPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { data: petMom } = useSelector(state => state.petMomReducer);
    const { data: petSitter } = useSelector(state => state.petSitterReducer);

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


    const openApplicantList = () => {

        const modal_width = '500';
        const modal_height = '750';

        const window_width = (window.screen.width - modal_width) / 2;
        const window_height = (window.screen.height - modal_height) / 2;

        const option = `width=${modal_width},height=${modal_height}, left=${window_width}, top=${window_height}, scrollbars=no`;

        window.open('/applicant', 'applicant', option);
    }
    const openMessageList = () => {

        const modal_width = '560';
        const modal_height = '515';

        const window_width = (window.screen.width - modal_width) / 2;
        const window_height = (window.screen.height - modal_height) / 2;

        const option = `width=${modal_width},height=${modal_height}, left=${window_width}, top=${window_height}`;

        window.open('/postMessageList', 'message', option);
    }

    return (
        <div className="mainPage">

            <div>
                <button onClick={openApplicantList}>신청자 목록</button>
                <button onClick={openMessageList}>쪽지함</button>
            </div>

            <img src="/img/banner.png" alt="banner" className="banner center" />
            <div className="cardList">
                <div className='dis-flex justify-between align-center cardName'>
                    <span>{">"}최신 펫시터 모집글</span>
                    <button className="more back-color" onClick={goPetSitter} >더보기+</button>
                </div>
                <div className='card'>
                    {Array.isArray(petSitter) ? petSitter.map(item => <LastedCard key={item.boardId} category="petSitter" item={item} />) : <div>최근 등록된 게시글이 없습니다.</div>}
                </div>
            </div>
            <div className="cardList">
                <div className='dis-flex justify-between align-center cardName'>
                    <span>{">"}최신 펫맘 모집글</span>
                    <button className="more back-color" onClick={goPetMom} >더보기+</button>
                </div>
                <div className='card'>
                    {Array.isArray(petMom) ? petMom.map(item => <LastedCard key={item.boardId} category="petMom" item={item} />) : <div>최근 등록된 게시글이 없습니다.</div>}
                </div>
            </div>
        </div >
    )
}

export default MainPage;