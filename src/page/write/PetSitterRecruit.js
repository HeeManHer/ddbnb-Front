import "../../css/petsitterrecruit.css";
import React, { useState } from "react";



function PetSitterRecruit() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="petsitterrecruitcontainer">



            <div className="buttoncontainer">
                <div className="board">게시판</div>
                <button className="insertwrite">등록</button>
                <button>취소</button>
            </div>

            <div className="yongdate">

                <h3 className="writeryong">작성자 : 김용민</h3>
                <div className="writedate">작성일 : 2023-05-18
                </div>
            </div>

            <hr className="line"></hr>

            <div className="smallcontainer">
                <div className="littlebitsmall">

                    <div>
                        <div className="petsitterrecruitwrite">게시판
                            <select className="firstselect">
                                <option value="">펫시터 모집 게시판</option>
                            </select>
                        </div>
                        <hr className="line"></hr>
                    </div>

                    <div className="inputname">
                        <div>
                            제목
                        </div>
                        <input className="textinput" type="text" placeholder="제목을 입력해 주세요." />
                        {/* <textarea placeholder="제목을 입력해 주세요." /> */}
                    </div>

                    <hr className="line"></hr>

                    <div>
                        지역
                        <select className="firstselect">
                            <option value="">시/도</option>
                        </select>
                        <select className="secondselect">
                            <option value="">시/군/구</option>
                        </select>
                    </div>

                    <hr className="line"></hr>

                    <div>
                        돌봄
                        <button className="dolbombtn">방문</button>
                        <button className="dolbombtn">출장</button>
                        <button className="dolbombtn">산책</button>
                    </div>

                    <hr className="line"></hr>

                    <div>
                        기간
                        <input className="dateselect1" type="date" />~<input className="dateselect2" type="date" />
                        사례금
                        <input className="moneygive" type="text" placeholder="사례금을 작성해 주세요." />
                    </div>

                    <hr className="line"></hr>

                    <div className="imgbtndiv">
                        <div className="image-container">
                            {selectedImage && (
                                <img
                                    src={selectedImage}
                                    alt="첨부된 이미지"
                                    className="attached-image"
                                />
                            )}
                            <div>
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>

                        <div >
                            <div className="abc">
                                <button className="petsitterrecruitbtn">이름</button>
                                <input className="cruittext" type="text" />
                                <hr className="line"></hr>
                            </div>
                            <div className="abc">
                                <button className="petsitterrecruitbtn">나이</button>
                                <input className="cruittext" type="text" />
                                <hr className="line"></hr>
                            </div>

                            <div className="abc">
                                <button className="petsitterrecruitbtn">견종</button>
                                <input className="cruittext" type="text" />

                                <hr className="line"></hr>
                            </div>

                            <div className="gender">
                                성별
                                <select className="firstselect1">
                                    <option value="">남/여</option>
                                    <hr className="line"></hr>
                                </select>
                                크기
                                <select className="secondselect1">
                                    <option value="">소/중/대</option>
                                    <hr className="line"></hr>
                                </select>
                                <hr className="line"></hr>
                            </div>
                            <div className="acb">
                                <button className="significantbtn">특이사항</button>
                                <input className="significant" type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="dogdog">
                        우리 강아지를 맡아주세요
                    </div>
                    <textarea placeholder="내용을 입력해 주세요." className="dogwrite">

                    </textarea>
                </div>
            </div>
        </div>




    );
}

export default PetSitterRecruit;