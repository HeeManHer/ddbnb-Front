import style from './ProfileStyle.module.css';
import { IoIosFemale } from 'react-icons/io';
import { IoIosMale } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMember, getUpdateMember } from '../../api/MemberAPICalls';
import { useEffect } from "react";
import { callKakaoLogoutAPI, callNaverLogoutAPI } from '../../api/LoginAPI';

function LoginProfilePage() {

    const navigate = useNavigate();
    const members = useSelector(store => store.memberReducer);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const logout = () => {
        dispatch(callNaverLogoutAPI());
        dispatch(callKakaoLogoutAPI());
        navigate("/", { replace: true });

    }

    const dispatch = useDispatch();

    // const handleKeyClick = (e) => {
    //     if (e.key === 'Enter') {
    //         // 입력된 텍스트를 배열에 추가
    //         setTexts((prevTexts) => [...prevTexts, e.target.value]);
    //         setInputText(''); // 입력 필드 초기화
    //     }
    // };

    // const handleDelete = (index) => {
    //     setTexts((prevTexts) => {
    //         const updatedTexts = [...prevTexts];
    //         updatedTexts.splice(index, 1);
    //         return updatedTexts;
    //     });
    // };

    useEffect(
        () => {
            dispatch(getCurrentMember())
        }
        ,[]
    );
    const [form, setForm] = useState({
        nickname: "",
        experience: "",
        preferredArea: "",
        detailedHistory: "",
        petSitterCareer: ""
    });

    const handleActions = () => {
        const memberId = members?.memberId;
        dispatch(getUpdateMember(memberId, form));
        navigate("/", { replace: true });
    }

    const onChangeHandler = (e) => {
        let value = e.target.value;
        // 닉네임 글자수 제한을 5글자로 설정
        if (e.target.name === 'nickname') {
            value = value.substring(0, 5);
        }
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    
    /* 성별 아이콘 */
    function GenderIcon() {
        if (members?.gender === 'female' || 'F') {
            return <IoIosFemale />
        } else {
            return <IoIosMale />
        }
    }

    /* 소셜 로그인 아이콘 */
    function SocialIcon() {

        if (members?.socialLogin === "KAKAO") {
            return <img src='../../../img/kakao_logo.png' alt='kakao logo' width={'30px'} height={'27px'} />
        }

        if (members?.socialLogin === 'NAVER') {
            return <img src='../../../img/naver_logo.png' alt='naver logo' width={'30px'} height={'27px'} />
        }
    }

    return (
        <div className={style.profileContainer}>
            <div>
                <h2>{SocialIcon()} 프로필등록</h2>
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
                    onChange={onChangeHandler} 
                    placeholder="닉네임을 입력해주세요" 
                    maxLength={5}
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
                        value={inputText}
                        onChange={(e) => {
                            handleInputChange(e);
                            onChangeHandler(e);
                        }}
                        // onKeyDown={handleKeyClick}
                        placeholder="경험 견종을 입력해주세요"
                    />
                    {/* <div style={{ display: 'flex' }}>
                        {texts.map((text, index) => (
                            <div key={index}>{text}<button onClick={() => handleDelete(index)}>X</button></div>
                        ))}
                    </div> */}
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
                    onChange={onChangeHandler} 
                    placeholder="펫시터 경력을 적어주세요"/>
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
                    onChange={onChangeHandler} 
                    placeholder="선호하는 지역을 적어주세요"/>
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
                    onChange={onChangeHandler} 
                    placeholder="상세한 이력을 적어주세요" />
                </div>
            </div>

            <div className={style.btnSet}>
                <button className={style.btnStyleCancle} onClick={logout}>
                    취소
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className={style.btnStyleInsert} onClick={handleActions}>
                    회원가입
                </button>
            </div>
        </div>



    )
}

export default LoginProfilePage;