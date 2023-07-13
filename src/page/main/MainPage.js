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
        }, []
    )

    const goPetSitter = () => {
        dispatch({ type: RESET_PAGE });
        navigate("/petSitter");
    }

    const goPetMom = () => {
        dispatch({ type: RESET_PAGE });
        navigate("/petMom");
    }

    return (
        <div className="mainPage">
            <img src="/img/banner.png" alt="banner" className="banner center" />
            <div className="cardList">
                <div className='dis-flex justify-between align-center cardName'>
                    <span>{">"}최신 펫시터 모집글</span>
                    <button className="more back-color" onClick={goPetSitter} >더보기+</button>
                </div>
                <div className='card'>
                    {Array.isArray(petSitter) && petSitter.length > 0 ?
                        petSitter.map(item => <LastedCard key={item.boardId} category="petSitter" item={item} />) :
                        <div>최근 등록된 게시글이 없습니다.</div>
                    }
                </div>
            </div>
            <div className="cardList">
                <div className='dis-flex justify-between align-center cardName'>
                    <span>{">"}최신 펫맘 모집글</span>
                    <button className="more back-color" onClick={goPetMom} >더보기+</button>
                </div>
                <div className='card'>
                    {Array.isArray(petMom) && petMom.length > 0 ?
                        petMom.map(item => <LastedCard key={item.boardId} category="petMom" item={item} />) :
                        <div>최근 등록된 게시글이 없습니다.</div>
                    }
                </div>
            </div>
        </div >
    )
}

export default MainPage;