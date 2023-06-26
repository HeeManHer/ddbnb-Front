import style from './MyPetMomCardBoard.module.css'
import { useDispatch, useSelector } from "react-redux";
import PageBtn from '../common/PageBtn';
import { getMyPetMomList } from '../../api/petMomAPI';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function MyPetMomCardBoard() {


    //리덕스
    const dispatch = useDispatch();
    const myPetMom = useSelector(state => state.petMomReducer);
    const currentPage = useSelector(state => state.pageReducer);
    // const {pageInfo} = pageInfo;
    const { data: mypetMoms, pageInfo } = myPetMom;

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



            {Array.isArray(mypetMoms) && mypetMoms.map((myPetMom, index) =>
                <Link to={`/petmom/${myPetMom.boardId}`} style={{ textDecoration: 'none', color: '#202020' }}>
                    <section className={`${style.category2} ${style.flex_center}`}>
                        <div>
                            <section style={myPetMom.momStatus === "취소됨" ? { backgroundColor : "#8d8d8d", color:"white"} : {backgroundColor : "#FAB7A2"}}>
                                {myPetMom.momStatus}
                            </section>
                        </div>
                        <div>{myPetMom.location}</div>
                        <div>{myPetMom.boardTitle}</div>
                        <div>{new Date(myPetMom.boardDate).toLocaleDateString().slice(0, -1)}</div>
                        {/* <div>{REVIEW_DATE}</div> */}
                    </section>
                </Link>
            )}
            {/* {페이징} */}
            <PageBtn pageInfo={pageInfo} />


        </>
    )

}

export default MyPetMomCardBoard;