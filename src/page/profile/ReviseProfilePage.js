import style from './ProfileStyle.module.css';

function ReviseProfilePage() {

    return (
        <div className={style.profileContainer}>
        <div>
            <h2>프로필수정</h2>
            <hr />
        </div>
        <div className={style.profileBox}>
            <image className={style.profileImageBox}></image>
            <div className={style.profileImageContent}>
                Username   
                성별
                <img src="../../img/men.png" alt="남" />
                <img src="/img/women.png" alt="여" />
            </div>
        </div>

        <div>
            <hr />
            <br />
        </div>
        <div className={style.profiles}>
            <div className={style.profileCareer}>
                닉네임
            </div>
            <input className={style.underLine} type="text"></input>
        </div>

        <div className={style.profiles}>
            <div className={style.profileCareer}>
                경험견종
            </div>
            <input className={style.underLine} type="text"></input>
        </div>

        <div className={style.profiles}>
            <div className={style.profileCareer}>
                기간
            </div>
            <input className={style.underLine} type="text"></input>
        </div>

        <div className={style.profiles}>
            <div className={style.profileCareer}>
                펫시터 경력
            </div>
            <input className={style.underLine} type="text"></input>
        </div>

        <div className={style.profiles}>
            <div className={style.profileCareer}>
                상세 이력
            </div>
            <input className={style.underLine} type="text"></input>
        </div>




        <div className={style.btnSet}>
            <button className={style.btnStyleCancle}>
                취소
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className={style.btnStyleInsert}>
                회원가입
            </button>
        </div>
    </div>

    )
}

export default ReviseProfilePage;