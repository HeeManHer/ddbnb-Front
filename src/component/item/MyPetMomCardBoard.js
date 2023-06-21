import style from './MyPetMomCardBoard.module.css'
import { useDispatch, useSelector } from "react-redux";
import PageBtn from '../common/PageBtn';
import { getMyPetMomList } from '../../api/petMomAPI';
import { useEffect, useState } from "react";

function MyPetMomCardBoard() {


//리덕스
const dispatch = useDispatch();
const myPetMom = useSelector(state => state.petMomReducer);
const currentPage = useSelector(state => state.pageReducer);
// const {pageInfo} = pageInfo;

useEffect(() => {
    dispatch(getMyPetMomList({ currentPage: currentPage }));

}, [currentPage]);


    return (
        <>
        <section className={style.section}>
            <article className={style.category}>
                <div>전체</div>
                <div>지역</div>
                <div>게시글명</div>
                <div>작성일</div>
            </article>
        </section>
        
        {/* <Link to={`/review/${review.reviewId}`} style={{ textDecoration: 'none', color: '#202020' }}>
            <section className={`${style.category} ${style.flex_center}`}>
                <div>
                    {rallytype()}
                </div>
                <div>{RALLY_NAME}</div>
                <div>{review.reviewTitle}</div>
                <div>{review.member?.nickname}</div>
                <div>{REVIEW_DATE}</div>
            </section>
        </Link> */}

            {/* 페이징
            <PageBtn pageInfo={pageInfo} /> */}


        </>
    )

}

export default MyPetMomCardBoard;