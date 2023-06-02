import style from './collectModal.module.css';

function PetMomCollectFinish() {
    return (
        <div className={style.modal}>
        <div className={style.collectFinishMdTitle}>
            <h2>&nbsp;펫맘 모집 마감</h2>
        </div>

        <div className={style.collectFinishMdContent}>
            <h1> 모집을 마감하시겠습니까?</h1>

            <div>
            &nbsp;&nbsp; 모집을 마감하신 이후에는<br/>
            &nbsp;게시글 수정, 삭제가 불가하며,<br/>
                더이상 신청을 받을 수 없습니다.
            </div> 
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

export default PetMomCollectFinish;