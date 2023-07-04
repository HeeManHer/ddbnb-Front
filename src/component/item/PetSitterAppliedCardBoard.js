import style from './AppliedCardBoard.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyApplyListAPI } from '../../api/applicantAPI';
import { Link } from 'react-router-dom';


function PetSitterAppliedCardBoard() {

    //리덕스
    const dispatch = useDispatch();
    const apply = useSelector(state => state.applicantsReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const { data: applys, pageInfo } = apply;

    useEffect(() => {
        dispatch(getMyApplyListAPI(currentPage));

    }, [currentPage]);

    return (
        <>
            <section className={style.section}>
                <article className={style.category}>
                    <div>전체</div>
                    <div>지역</div>
                    <div>견종</div>
                    <div>게시글명</div>
                    <div>취소</div>
                </article>
            </section>


            {Array.isArray(applys) && applys.map((apply, index) =>
                <Link to={`/petsitter/${apply.boardId.sitterStatus}`} style={{ textDecoration: 'none', color: '#202020' }} key={index}>
                    <section className={`${style.category2} ${style.flex_center}`}>
                        <div>
                            <section style={apply.sitterStatus === "취소됨" ? { backgroundColor: "#8d8d8d", color: "white" } : { backgroundColor: "#FAB7A2" }}>
                                {apply.boardId.sitterStatus}
                            </section>
                        </div>
                        <div>{apply.boardId.location}</div>
                        <div>{apply.boardId.petShape}</div>
                        {/* <div>{new Date(myPetMom.boardDate).toLocaleDateString().slice(0, -1)}</div> */}
                        <div>{apply.boardId.boardTitle}</div>
                        <div><button>신청취소</button></div>
                    </section>
                </Link>
            )}


        </>
    );
}

export default PetSitterAppliedCardBoard;