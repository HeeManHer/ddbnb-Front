import React from "react";
import "../write/detail.css"


function PetSitterRecruitDatail() {
    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");
    };

    return (
        <div className="height-auto">
            <div className="dateAndWriter">
                <h1>게시판</h1>
                <button className="declarationButton">신고</button>
            </div>
            <div className="dateAndWriter">
                <h5>작성자 : 김용민</h5>
                <h5>작성일 : 2023-05-18</h5>
            </div>
            <hr className="line"></hr>
            <div>
                <div className="images">
                    <button className="imageBtn"> &lt; </button>
                    <img src="../img/Rectangle 47.png"></img>
                    <button className="imageBtn"> &gt; </button>
                </div>
                <h2 className="text">1/4</h2>
            </div>
            <div className="comment">
                <h2 className="comment-content" style={{ right: '4%' }}>게시판</h2>
                <h3 className="comment-content2" style={{ left: '13px' }} > 펫시터 모집  게시판</h3>
            </div>
            <hr className="line"></hr>
            <div className="comment">
                <h2 className="comment-content">제목 </h2>
                <h3 className="comment-content2" >안녕 나는 나시고랭이야</h3>
            </div>
            <hr className="line"></hr>
            <div className="comment">
                <h2 className="comment-content">지역</h2>
                <h3 className="comment-content2" >성남시 분당구 백현동</h3>
            </div>
            <hr className="line"></hr>

            <div className="comment">
                <h2 className="comment-content">돌봄</h2>
                <button className="choice-box" onClick={toggleSelected}>방문</button>
                <button className="choice-box" onClick={toggleSelected}>출장</button>
                <button className="choice-box" onClick={toggleSelected}>산책</button>

            </div>
            <hr className="line"></hr>

            <div className="comment">
                <h2 className="comment-content">기간</h2>
                <h3 className="comment-content2" >2023-05-17 ~ 2023-05-19</h3>
                <h2 className="comment-content3">사례금</h2>
                <h3 className="comment-content4">90000 ￦</h3>
            </div>
            <hr className="line"></hr>
            <div className="formsize">
                <div className="doginfo">
                    <div className="size">
                        <button className="doginfo-button">이름</button>
                        <h3>나시고랭</h3>
                    </div>
                    <hr className="line"></hr>
                    <div className="size">
                        <button className="doginfo-button">나이</button>
                        <h3>2살</h3>
                    </div>
                    <hr className="line"></hr>
                    <div className="size">
                        <button className="doginfo-button">견종</button>
                        <h3>진돗개</h3>
                    </div>
                    <hr className="line"></hr>
                    <div className="size">
                        <button className="doginfo-button" >성별</button>
                        <h3>남자</h3>
                        <button className="size-size">크기</button>
                        <h3 className="size-position">중형</h3>
                    </div>
                    <hr className="line"></hr>
                    <div className="doginfo2">
                        <button>특이사항</button>
                        <textarea>활동량이 많아서 하루에
                            산책 한번은 시켜주세요.
                            사람을 아주 좋아하는 아이랍니다.</textarea>
                    </div>
                </div>
                <div className="dogplz">
                    <h2>우리 강아지를 맡아주세요</h2>
                    <textarea>활동량이 많아서 하루에
                        산책 한번은 시켜주세요.
                        사람을 아주 좋아하는 아이랍니다.ㅇ럼나ㅣㅇㄴ미안ㅁ안밍ㅁㄴㅇㅁㅇㄴㅁ</textarea>
                </div>
            </div>
            <div>
                <div className="endline2">
                    <hr className="line"></hr>
                    <button className="wantbtn2">신청하기</button>
                </div>
            </div >
        </div >
    );
};

export default PetSitterRecruitDatail;