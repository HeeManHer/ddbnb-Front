import { useNavigate } from "react-router-dom";
import PostMessage from "../modal/pm/PostMessage";

function ApplicantBox({ user }) {

    const navigate = useNavigate();

    const starPoint = [];

    starPoint.length = 5;

    for (let i = 0; i < user.point; i++) {
        starPoint.push("★");
    }
    for (let i = 4; i >= user.point; i--) {
        starPoint.push("☆");
    }



    return (
        <div className="applicantBox back-color dis-flex align-center bottom-shadow">

            <div className="applicantInfo dis-flex flex-column align-center">
                <img src={user.img} />
                <span>{user.name}</span>
            </div>

            <div className="evaluation" >
                <div className="record">
                    <div className="dis-flex align-center">펫시터 참여 기록</div>
                    <span>{user.record}회</span>
                </div>
                <div className="point">
                    <div className="star">{starPoint}</div>
                    <span>({user.point}점)</span>
                </div>
            </div>

            <div className="navbtn dis-flex align-center">
                <div onClick={() => navigate("./userProfile/" + user.no)}>프로필 보기</div>
                <div onClick={() => <PostMessage user={user} />}>쪽지 쓰기</div>
            </div>

        </div>
    )
}

export default ApplicantBox;