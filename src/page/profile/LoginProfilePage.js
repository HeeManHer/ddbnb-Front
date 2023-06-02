import style from './ProfileStyle.module.css';
import { IoIosFemale } from 'react-icons/io';
import { IoIosMale } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function LoginProfilePage() {

    const navigate = useNavigate();

    /* 성별 아이콘 */
    function GenderIcon() {

        if (member?.gender === 'female') {
            return <IoIosFemale />
        } else {
            return <IoIosMale />
        }
    }

    /* 소셜 로그인 아이콘 */
    function SocialIcon() {

        if (member?.socialLogin === "KAKAO") {
            return <img src='./img/kakao.png' alt='kakao logo' width={'20px'} height={'20px'} />
        }

        if (member?.socialLogin === 'NAVER') {
            return <img src='./img/naver.png' alt='naver logo' width={'20px'} height={'20px'} />
        }
    }

    // <div className={style.Profile}>
    //     <img src={member?.imageSource} alt='profile' className={style.ProfileImg} />
    //     <div className={style.Name}>
    //         <div className={style.Social}>{SocialIcon()}</div>
    //         <label>{member?.nickname}</label>
    //         <label className={style.Gender}>{GenderIcon()}</label>
    //     </div>
    //     <label className={style.Nickname}>{member?.email}</label>
    // </div>

    return (
        <div className={style.profileContainer}>
            <div>
                <h2>프로필등록</h2>
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
                <input className={style.underLine} type="text" placeholder="닉네임을 입력해주세요"></input>
            </div>

            <div className={style.profiles}>
                <div className={style.profileCareer}>
                    경험견종
                </div>
                <input className={style.underLine} type="text" placeholder="경험한 견종을 입력해주세요"></input>
            </div>

            <div className={style.profiles}>
                <div className={style.profileCareer}>
                    기간
                </div>
                <input className={style.underLine} type="text" placeholder="기간을 적어주세요"></input>
            </div>

            <div className={style.profiles}>
                <div className={style.profileCareer}>
                    펫시터 경력
                </div>
                <input className={style.underLine} type="text" placeholder="펫시터 경력을 적어주세요"></input>
            </div>

            <div className={style.profiles}>
                <div className={style.profileCareer}>
                    상세 이력
                </div>
                <input className={style.underLine} type="text" placeholder="상세한 이력을 적어주세요"></input>
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

export default LoginProfilePage;