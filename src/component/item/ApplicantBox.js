function ApplicantBox({ user }) {

    const starPoint = [];

    starPoint.length = 5;

    for (let i = 0; i < user.point; i++) {
        starPoint.push("★");
    }
    for (let i = 4; i >= user.point; i--) {
        starPoint.push("☆");
    }

    const openModal = () => {
        // window.close();

        const modal_width = '500';
        const modal_height = '500';

        const window_width = (window.screen.width - modal_width) / 2;
        const window_height = (window.screen.height - modal_height) / 2;

        const option = `width=${modal_width},height=${modal_height}, left=${window_width}, top=${window_height}, scrollbars=no`;

        window.open('/postMessage', 'message', option);
    }

    const closeModal = (url) => {
        window.opener.location.href = url;
        // window.close();
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
                <div className="record">
                    <div className="dis-flex align-center">펫맘 참여 기록</div>
                    <span>{user.record}회</span>
                </div>
                <div className="point">
                    <div className="star">{starPoint}</div>
                    <span>({user.point}점)</span>
                </div>
            </div>

            <div className="navbtn dis-flex align-center">
                <div onClick={() => closeModal(`/userProfile/${user.no}`)}>프로필 보기</div>
                <div onClick={() => openModal('postMessage')}>쪽지 쓰기</div>
            </div>

        </div>
    )
}

export default ApplicantBox;