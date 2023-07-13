import style from './ProfileStyle.module.css';
import { IoIosFemale } from 'react-icons/io';
import { IoIosMale } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMember, getUpdateMember } from '../../api/MemberAPICalls';
import { useEffect } from "react";
import "../../component/modal/review/review.css";

function ReviseProfilePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { memberId } = useParams();
    const members = useSelector(store => store.memberReducer);

    const [form, setForm] = useState({
        nickname: "",
        experience: "",
        preferredArea: "",
        detailedHistory: "",
        petSitterCareer: "",
    });

    const [image, setImage] = useState()

    useEffect(
        () => {
            dispatch(getCurrentMember(memberId))
        }
        , []
    );

    useEffect(
        () => {
            setForm(members);
        }
        , [members]
    );

    const handleAction = () => {
        navigate("/mypage", { replace: true });
    }

    const handleActions = () => {
        const memberId = members?.memberId;

        const formData = new FormData();

        formData.append("newProfile", new Blob([JSON.stringify(form)], { type: "application/json" }));

        if (image) {
            formData.append("image", image);
        }

        dispatch(getUpdateMember(memberId, formData));
        // navigate(`/mypage/${memberId}`, { replace: true });
    }

    const [previewImage, setPreviewImage] = useState(null);

    const onChangeHandler = (e) => {
        let value = e.target.value;
        // 닉네임 글자수 제한을 5글자로 설정
        if (e.target.name === 'nickname') {
            value = value.substring(0, 5);
        }
        setForm({
            ...form,
            [e.target.name]: value
        });
    };
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    /* 성별 아이콘 */
    function GenderIcon() {
        if (members?.gender === 'female' || members?.gender === 'F') {
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
                <h2>{SocialIcon()} 프로필 수정  </h2>
                <hr />
            </div>
            <div className={style.profileBox}>
                <img src={previewImage || members?.profileImage} alt='profile' className={style.profileImageBox} />
                <div className={style.profileImageContent}>
                    <label>{members?.nickname}</label>
                    &nbsp;
                    성별
                    &nbsp;
                    <label className={style.Gender}>{GenderIcon()}</label>
                    <div>
                        <input
                            type="file"
                            id="imageUpload"
                            accept='image/jpg,image/png,image/jpeg,image/gif'
                            style={{ display: "none" }}
                            onChange={handleImageUpload}
                        />
                        <label className="yellow reviewmodal-imgbtn" htmlFor="imageUpload">
                            +
                        </label>
                    </div>
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
                    />
                </div>
            </div>

            <div className={style.btnSet}>
                <button className={style.btnStyleCancle} onClick={handleAction}>
                    취소
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className={style.btnStyleInsert} onClick={handleActions}>
                    수정
                </button>
            </div>
            <br />
        </div>
    )
}

export default ReviseProfilePage;