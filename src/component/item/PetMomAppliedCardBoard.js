import style from './AppliedCardBoard.module.css';
import { useEffect, useState } from "react";
import MyCardList from "../../component/list/AppliedList";

function PetMomAppliedCardBoard() {

    return (
<>
        <section className={style.section}>
            <article className={style.category}>
                <div>전체</div>
                <div>지역</div>
                <div>견종</div>
                <div>게시글명</div>
            </article>
        </section>
    </>
    );
}

export default PetMomAppliedCardBoard;