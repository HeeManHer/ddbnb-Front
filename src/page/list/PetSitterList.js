import "../../css/petsitterList.css";
import { useNavigate } from "react-router-dom";

function PetSitterList() {


    const navigate = useNavigate()
    return (
        <div>


            <button className="write" onClick={() => navigate("./recruit")}>글쓰기</button>
            <br />
            <div className="main">

                <div className="mainpagebox">
                    <div className="wherewhen">
                        <section>
                            <h4 className="where">어디에 사시나요?</h4>
                            <div>
                                <select className="firstselect">
                                    <option value="">시/도</option>
                                </select>
                                <select className="secondselect">
                                    <option value="">시/군/구</option>
                                </select>
                            </div>
                        </section>
                        <section>
                            <h4 className="when">언제 맡기길 원하시나요?</h4>
                            <div>
                                <input className="dateselect" type="date" />~<input className="dateselect" type="date" />
                            </div>
                        </section>
                    </div>
                    <div>
                        <h4 className="title">원하는 조건을 선택하세요</h4>
                    </div>
                    <div className="btnlist">
                        <div className="doglistbtn">
                            <button className="doglist">소/중형견</button>
                            <button className="doglist">대형견</button>
                            <button className="doglist">산책</button>
                            <button className="doglist">방문/출장</button>
                        </div>
                        <button className="searchinfo">
                            <img src="../img/readingglasses.png"></img>
                            검색
                        </button>
                    </div>

                </div>
                <h5 className="statecheck">최신순  평점순  리뷰순 <img src="../img/check.png" /></h5>
            </div>


            <div className="in" >

                <img className="dogimg" src="../img/angrydog.png"></img>
                <div className="textlist">
                    <div className="wheretext">
                        <div>경기도 성남시 분당구</div>
                        <div>작성일 2023-05-17</div>
                    </div>
                    <div>
                        <div>우리 귀요미 화내는 모습 돌봐주세여</div>
                        <hr className="line"></hr>
                    </div>
                    <div className="columncss">
                        <div>소형견,산책</div>
                        <div>기간: 2023-05-18 ~ 2023-05-18</div>
                        <div className="stardivbtn">
                            <div className="star">★★★★★</div>
                            {/* <img className="star" src="../img/star.png"></img> */}
                            <div className="divbtn">
                                <div>사례 ￦협의</div>
                                <button>모집중</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetSitterList;