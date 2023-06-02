import style from './collectModal.module.css';

function PetSitterCollectCancle() {
    return (
        <div className={style.modal}>
        <div className={style.collectCancleMdTitle}>
            <h2>&nbsp;펫시터 모집 취소</h2>
        </div>

        <div className={style.collectCancleMdContent}>
            <h1> 모집을 취소하시겠습니까?</h1>
        </div>

        <div className={style.btnSet}>
        &nbsp;<button className={style.btnStyleYes}>
                예
            </button>

            <button className={style.btnStyleNo}>
                아니오
            </button>&nbsp;
        </div>
    </div>
    )
}

export default PetSitterCollectCancle;