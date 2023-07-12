import { useNavigate } from "react-router-dom";
import StarPoint from "../item/StarPoint";

function PetSitterCard({ petsitter }) {

    const navigate = useNavigate()
    console.log(petsitter)
    return (
        <div
            className={`in ${petsitter.sitterStatus === '모집취소' ? 'gray' : ''}`}
            style={petsitter.sitterStatus === '모집취소' ? { backgroundColor: "#9D9D9D" } : {}}
            onClick={() => navigate(`./${petsitter.boardId}`)}
        >
            <img className="dogimg" src={petsitter?.boardImage[0]?.imageUrl} alt="강아지 사진" />
            <div className="textlist">
                <div className="wheretext">
                    <div>{petsitter.location}</div>
                    <div>{petsitter.boardDate}</div>
                </div>
                <div>
                    <div>{petsitter.boardTitle}</div>
                    <hr className="line"></hr>
                </div>
                <div className="columncss">
                    <div>{petsitter.petSize},{petsitter.care}</div>
                    <div>기간: {petsitter.startDate} ~ {petsitter.endDate}</div>
                    <div className="stardivbtn">
                        <StarPoint starPoint={petsitter.member?.starPoint} />
                        {/* <img className="star" src="../img/star.png"></img> */}
                        <div className="divbtn">
                            <div>사례 : {petsitter.rate}</div>
                            <button className="section1">{petsitter.boardStatus}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetSitterCard;