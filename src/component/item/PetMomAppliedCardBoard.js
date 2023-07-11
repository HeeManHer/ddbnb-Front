import style from './AppliedMomCardBoard.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMyMomApplyListAPI } from '../../api/applicantAPI';
import { useNavigate } from 'react-router-dom';

function PetMomAppliedCardBoard() {

    const dispatch = useDispatch();
    const apply = useSelector(state => state.momApplicantsReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const { data: applys } = apply;


    useEffect(() => {
        dispatch(getMyMomApplyListAPI(currentPage));
    }, [currentPage]
    );

    const navigate = useNavigate();
    return (
        <>
            <section className={style.section}>
                <article className={style.category}>
                    <div>전체</div>
                    <div>지역</div>
                    <div>게시글명</div>
                    <div>신청일</div>
                    <div>취소</div>
                </article>
            </section>

            {Array.isArray(applys) && applys.map((apply, index) =>
                <section className={`${style.category2} ${style.flex_center}`}>
                    <div>
                        <section style={apply.momStatus === "취소됨" ? { backgroundColor: "#8d8d8d", color: "white" } : { backgroundColor: "#FAB7A2" }}>
                            {apply.boardId.momStatus}
                        </section>
                    </div>
                    <div onClick={() => navigate(`/petMom/${apply.boardId.boardId}`)}>{apply.boardId.location}</div>
                    <div onClick={() => navigate(`/petMom/${apply.boardId.boardId}`)}>{apply.boardId.boardTitle}</div>
                    <div onClick={() => navigate(`/petMom/${apply.boardId.boardId}`)}>{apply.appliedDate}</div>
                    <div ><button>신청취소</button></div>
                </section>
            )}
        </>
    );
}

export default PetMomAppliedCardBoard;