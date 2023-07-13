import { useNavigate } from "react-router-dom";
import StarPoint from "../item/StarPoint";

function PetMomCard({ petmom }) {

    const navigate = useNavigate()
    console.log(petmom)
    return (
        <div onClick={() => navigate(`./${petmom.boardId}`)}>
            <div
                className={`in ${petmom.momStatus === '모집취소' ? 'gray' : ''}`}
                style={petmom.momStatus === '모집취소' ? { backgroundColor: "#9D9D9D" } : {}}
                onClick={() => navigate(`./${petmom.boardId}`)}
            >
                <img className="dogimg" src={petmom?.boardImage[0]?.imageUrl} alt="강아지 사진" />

                <div className="textlist">
                    <div className="wheretext">
                        <div className="dis-flex">{petmom.location}</div>
                        <div>{petmom.boadrDate}</div>
                    </div>
                    <div>
                        <h2>{petmom.boardTitle}</h2>
                        <hr className="line"></hr>
                    </div>
                    <div className="columncss">

                        <div>{petmom.houseType} {petmom.petYN} {petmom.care}</div>
                        <div>기간: {petmom.startDate} ~ {petmom.endDate}</div>
                        <div className="stardivbtn">
                            <div className="dis-flex">
                            </div>
                            <div className="starpoint-size ">
                                <StarPoint starPoint={petmom.member?.starPoint} />
                            </div>
                            <div className="divbtn flex-column">
                                <div>{petmom.dateRate}￦
                                    <button>하루당</button>
                                </div>
                                <div>{petmom.hourlyRate}￦
                                    <button>시간당</button>
                                    <div className="button-w">
                                        <button className="section1">{petmom.boardStatus}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PetMomCard;