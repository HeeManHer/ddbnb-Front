import { useNavigate } from "react-router-dom";
import "../../css/petsitterList.css";
import "../../css/petmomList.css";


function PetMomList() {

    const navigate = useNavigate()

    // <>
    //     <h1 >PetMomList</h1>
    //     <h2 onClick={() => navigate("./1")} >Go PetMomListDetail</h2>
    //     <h2 onClick={() => navigate("./recruit")} >Go PetMomRecruit</h2>
    // </>

    return (
        <div>


            <button className="write" onClick={() => navigate("./recruit")}>글쓰기</button>
            <br />
            <div className="main">

                <div className="mainpagebox">
                    <div className="wherewhen">
                        <section>
                            <h4 className="where">어디에 사시나요?</h4>
                            <div className="sidogu">
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
                            <button className="petmombtn">반려동물 없음</button>
                            <button className="petmombtn">픽업 가능</button>
                            <button className="petmombtn">대형견 가능</button>
                            <button className="petmombtn">노견 케어</button>
                        </div>
                        <button className="searchinfo">
                            <img src="../img/readingglasses.png"></img>
                            검색
                        </button>
                    </div>

                </div>
                <h5 className="statecheck">최신순  평점순  리뷰순 가격순 <img src="../img/check.png" /></h5>
            </div>


            <div className="in" >

                <img className="dogimg" src="../img/home.png"></img>
                <div className="textlist">
                    <div className="wheretext">
                        <div className="dis-flex">경기도 성남시 분당구<div className="asin">→ 애신</div></div>
                        <div>작성일 2023-05-17</div>
                    </div>
                    <div>
                        <h2>강아지 보는게 뭐 어렵다고</h2>
                        <hr className="line"></hr>
                    </div>
                    <div className="columncss">
                        <div>단독 주택,반려동물 있어요,노견 케어</div>
                        <div>기간: 2023-05-18 ~ 2023-05-18</div>
                        <div className="stardivbtn">
                            <div className="dis-flex">
                                <div className="star">★★★★★</div>리뷰 1234개
                            </div>
                            {/* <img className="star" src="../img/star.png"></img> */}
                            <div className="divbtn flex-column">
                                <div>50000￦
                                    <button>1박</button>
                                </div>
                                <div>사례￦
                                    <button>모집중</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default PetMomList;
