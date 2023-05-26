import style from "./AllReviewPage.module.css"

function AllReviewPage() { 
    return (
        <section className={style.board}>
            <section>
                <button className={style.imageBtn}> &lt; </button>
            </section>
            <article>
                <div className={style.content}>
                    <div className={style.image}>사진</div>
                    <article>( n / n )</article>
                    <section className={style.contentContainer}>
                        <div style={{display : 'flex', borderBottom : '1px solid #8d8d8d' }}>
                            <div>닉네임 님</div>
                            <div>별점</div>
                        </div>
                        <section className={style.context}>제목
                            <section>리뷰 상세 내용</section>
                        </section>
                        <button>닫기</button>
                    </section>
                </div>
            </article>
            <section>
                <button className={style.imageBtn}> &gt; </button>
            </section>

        </section>
    )
}

export default AllReviewPage;                