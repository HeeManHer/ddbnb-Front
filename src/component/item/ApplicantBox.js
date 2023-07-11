import StarPoint from "./StarPoint";

function ApplicantBox({ user }) {

    const openModal = () => {

        const modal_width = '500';
        const modal_height = '500';

        const window_width = (window.screen.width - modal_width) / 2;
        const window_height = (window.screen.height - modal_height) / 2;

        const option = `width=${modal_width},height=${modal_height}, left=${window_width}, top=${window_height}, scrollbars=no`;

        window.open(`/sendMessage/${user.member.memberId}`, 'message', option);
    }

    const closeModal = (url) => {
        window.location.href = url;
    }

    return (
        <div className="applicantBox back-color dis-flex align-center bottom-shadow">

            <div className="applicantInfo dis-flex flex-column align-center">
                <img src={user.member.profileImage} alt="유저 이미지" />
                <span>{user.member.nickname}</span>
            </div>

            <div className="evaluation" >
                <div className="point">
                    <div className="dis-flex align-center">신청일</div>
                    <span>{user.appliedDate}</span>
                </div>
                <div className="point">
                    <StarPoint starPoint={user.member.starPoint} />
                    <span>({user.member.starPoint}점)</span>
                </div>
            </div>

            <div className="navbtn dis-flex align-center">
                <div onClick={() => closeModal(`/mypage/${user.member.memberId}`)}>프로필 보기</div>
                <div onClick={() => openModal('postMessage')}>쪽지 쓰기</div>
            </div>

        </div>
    )
}

export default ApplicantBox;