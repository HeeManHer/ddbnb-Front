import { useNavigate } from "react-router-dom";

function LastedCard({ category, item }) {

    const navigate = useNavigate();

    const url = item.boardImage && item.boardImage[0];

    return (
        <div className="lastedCard" onClick={() => navigate(`/${category}/${item.boardId}`)}>
            <div className="lastedCard-inner card center-top">
                <img src={url?.imageUrl} alt="개 사진" height='50%' />
                <div>{item.boardTitle}</div>
                <div className="dis-flex align-center date">
                    <img src="/img/Calendar.png" alt="달력 사진" />
                    <span>{item.startDate}</span>
                    ~
                    <span>{item.endDate}</span>
                </div>
                <div className="profil">
                    {<div className="dis-flex align-center" >
                        <img src={item?.member?.profileImage} alt="프로필사진" className="profilImg" />
                        <span>{item?.member?.nickname}</span>
                    </div>}
                    <span>{item.location}</span>
                </div>
            </div>
        </div>
    )
}

export default LastedCard;