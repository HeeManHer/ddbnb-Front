// import React from "react";
import Calendar from "../../component/item/Calendar";
import "../../css/detail.css"
import React, { useState } from "react";

function PetMomRecruit() {
    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");
    };
    const [inputmoney1, setInputmoney1] = useState(""); // 초기값은 빈 문자열로 설정

    const handleDatetimeChange = (event) => {
        const selectedIndex = event.target.selectedIndex; // 선택된 옵션의 인덱스 가져오기
        const selectedOption = event.target.options[selectedIndex]; // 선택된 옵션 가져오기
        const selectedValue = selectedOption.value; // 선택된 옵션의 값 가져오기
        const selectedText = selectedOption.text; // 선택된 옵션의 텍스트 가져오기

        setInputmoney1(selectedValue); // inputmoney1 업데이트
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

            <div className="comment">
                <h2 className="comment-content" style={{ right: '4%' }}>게시판</h2>
                <h3 className="comment-content2" style={{ left: '13px' }} > 펫맘 모집  게시판</h3>
            </div>

            <hr className="line"></hr>
            <div className="comment">
                <h2 className="comment-content">제목 </h2>
                <h3 className="comment-content2" > 모두의 펫맘 사랑스럽게 돌봐드려요</h3>
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

                <div className="mommoneydiv">
                    <h2 className="comment-mommoney">사례금</h2>

                    {/* <select className="datetime">
                        <option value="">요일/시간</option>
                        <option value="">1박</option>
                        <option value="">시간</option>
                    </select> */}

                    <select className="datetime" onChange={handleDatetimeChange}>
                        <option value="">요일/시간</option>
                        <option value="selectedValue">1박</option>
                        <option value="selectedText">시간</option>
                    </select>

                    <input className="inputmoney1" type="text" placeholder="금액을 입력해 주세요." />
                </div>



            </div>
            <hr className="line"></hr>
            <div className="formsize">
                <div className="doginfo">
                    <div className="images">
                        <button className="imageBtn"> &lt; </button>
                        <img className="images" src="../img/house.png" ></img>
                        <button className="imageBtn"> &gt; </button>
                    </div>
                    <div className="calendar">
                        <Calendar />
                    </div>
                </div>
                <div className="momplz">
                    <div>
                        <button className="choice-box2" onClick={toggleSelected}>단독주택</button>
                        <button className="choice-box2" onClick={toggleSelected}>아파트</button>
                        <button className="choice-box2" onClick={toggleSelected}>빌라</button>
                        <hr className="line2"></hr>
                        <button className="choice-box2" onClick={toggleSelected}>픽업가능</button>
                        <button className="choice-box2" onClick={toggleSelected}>대형견 가능</button>
                        <button className="choice-box2" onClick={toggleSelected}>노견케어</button>
                        <hr className="line2"></hr>
                        <button className="choice-box3" onClick={toggleSelected}>반려동물 있어요</button>
                        <button className="choice-box3" onClick={toggleSelected}>반려동물 없어요</button>
                        <hr className="line2"></hr>
                        <div className="dateAndWriter">
                            <h2>특이사항</h2>
                            <textarea className="momplz-textarea1">저희는 단독 주택이여서 편하게 반려동물을
                                맡아 드릴 수 있는 환경입니다.</textarea>
                        </div>
                    </div>
                    <h2> 강아지를 맡아줄게요</h2>
                    <textarea className="momplz-textarea2">저는 많은 아이들을 맡아본 경험이 있습니다. 믿고 맡겨주세요</textarea>
                </div>
            </div>
            <div>
                <div className="endline2">
                    <hr className="line"></hr>
                    <button className="wantbtn2">신청하기</button>
                </div>
            </div >
        </div>
    );
};
export default PetMomRecruit;