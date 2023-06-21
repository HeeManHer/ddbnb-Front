import { useNavigate } from "react-router-dom";

function LastedCard({ category, item }) {

    const navigate = useNavigate();

    return (
        <div className="lastedCard" onClick={() => navigate(`/${category}/${item.no}`)}>
            <div className="lastedCard-inner card center-top">
                <img src={item.img} alt="개 사진" />
                <div>{item.boardTitle}</div>
                <div className="dis-flex align-center date">
                    <img src="/img/Calendar.png" alt="달력 사진" />
                    <span>{item.startDate}</span>
                    ~
                    <span>{item.endDate}</span>
                </div>
                <div className="profil">
                    {item.memberId && <div className="dis-flex align-center" >
                        <img src={item.memberId.profileImage} alt="프로필사진" className="profilImg" />
                        <span>{item.memberId.nickname}</span>
                    </div>}
                    <span>{item.location}</span>
                </div>
            </div>
        </div>
    )
}

export default LastedCard;