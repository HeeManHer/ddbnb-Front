import style from './MyPetSitterCardBoard.module.css';

function MyPetSitterCardBoard() {

    return (
        <section className={style.section}>
            <article className={style.category}>
                <div>전체</div>
                <div>지역</div>
                <div>견종</div>
                <div>게시글명</div>
                <div>작성일</div>
            </article>
        </section>
    )

}

export default MyPetSitterCardBoard;