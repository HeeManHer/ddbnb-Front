import style from './ProfileStyle.module.css';
import { IoIosFemale } from 'react-icons/io';
import { IoIosMale } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMember, getUpdateMember } from '../../api/MemberAPICalls';
import { useEffect } from "react";

function ReviseProfilePage() {

    const navigate = useNavigate();
    const members = useSelector(store => store.memberReducer);

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        nickname:  "",
        experience: "",
        preferredArea: "",
        detailedHistory: "",
        petSitterCareer: ""
    });

    useEffect(
        () => {
            dispatch(getCurrentMember())
        }
        , []
    );

    useEffect(
        () => {
            setForm(members);
        }
        , [members]
    );


    

    const handleActions = () => {
        const memberId = members?.memberId;
        dispatch(getUpdateMember(memberId, form));
        navigate("/mypage", { replace: true });
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    /* 성별 아이콘 */
    function GenderIcon() {
        if (members?.gender === 'female') {
            return <IoIosFemale />
        } else {
            return <IoIosMale />
        }
    }

    /* 소셜 로그인 아이콘 */
    function SocialIcon() {

        if (members?.socialLogin === "KAKAO") {
            return <img src='./img/kakao.png' alt='kakao logo' width={'20px'} height={'20px'} />
        }

        if (members?.socialLogin === 'NAVER') {
            return <img src='./img/naver.png' alt='naver logo' width={'20px'} height={'20px'} />
        }
    }

    return (
        <div className={style.profileContainer}>
            <div>
                <h2>프로필등록 SocialIcon</h2>
                <hr />
            </div>
            <div className={style.profileBox}>
                <img src={members?.profileImage} alt='profile' className={style.profileImageBox} />
                <div className={style.profileImageContent}>
                    <label>{members?.nickname}</label>
                    &nbsp;
                    성별
                    &nbsp;
                    <label className={style.Gender}>{GenderIcon()}</label>
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
                <div style={{ width: '70%' }}>
                    <input className={style.underLine}
                        type="text"
                        name='nickname'
                        value={form.nickname}
                        onChange={onChangeHandler}
                    />
                </div>
            </div>

            <div className={style.profiles}>
                <div className={style.profileCareer}>
                    경험견종
                </div>
                <div style={{ flexDirection: 'column', width: '70%' }}>
                    <input className={style.underLine}
                        type="text"
                        name='experience'
                        value={form.experience}
                        onChange={onChangeHandler}
                    />
                </div>
            </div>

            <div className={style.profiles}>
                <div className={style.profileCareer}>
                    펫시터 경력
                </div>
                <div style={{ width: '70%' }}>
                    <input className={style.underLine}
                        type="text"
                        name='petSitterCareer'
                        value={form.petSitterCareer}
                        onChange={onChangeHandler} />
                </div>
            </div>

            <div className={style.profiles}>
                <div className={style.profileCareer}>
                    선호 지역
                </div>
                <div style={{ width: '70%' }}>
                    <input className={style.underLine}
                        type="text"
                        name='preferredArea'
                        value={form.preferredArea}
                        onChange={onChangeHandler} />
                </div>
            </div>

            <div className={style.profiles}>
                <div className={style.profileCareer}>
                    상세 이력
                </div>
                <div style={{ width: '70%' }}>
                    <textarea className={style.textareabox}
                        type="text"
                        name='detailedHistory'
                        value={form.detailedHistory}
                        onChange={onChangeHandler}
                        // onChange={(e) => {dispatch(putMemberDetailedHistory(e.target.value))} }
                        />
                </div>
            </div>

            <div className={style.btnSet}>
                <button className={style.btnStyleCancle}>
                    취소
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className={style.btnStyleInsert} onClick={handleActions}>
                    수정
                </button>
            </div>
        </div>



    )
}

export default ReviseProfilePage;