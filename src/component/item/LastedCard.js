import { useNavigate } from "react-router-dom";

function LastedCard({ category, item }) {

    const navigate = useNavigate();

    return (
        <div className="lastedCard" onClick={() => navigate(`/${category}/${item.no}`)}>
            <div className="lastedCard-inner card center-top">
                <img src={item.img} alt="개 사진" />
                <div>{item.title}</div>
                <div className="dis-flex align-center date">
                    <img src="/img/Calendar.png" alt="달력 사진" />
                    <span>{item.date.startDate}</span>
                    ~
                    <span>{item.date.endDate}</span>
                </div>
                <div className="profil">
                    <div className="dis-flex align-center" >
                        <img src={item.editor.profil} alt="프로필사진" className="profilImg" />
                        <span>{item.editor.name}</span>
                    </div>
                    <span>{item.adress.slice(0, -3)}</span>
                </div>
            </div>
        </div>
    )
}

export default LastedCard;