import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMessageDetail } from "../../../api/messageAPI";
import StarPoint from "../../item/StarPoint";

function PostMessage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { messageId } = useParams();
    const message = useSelector(state => state.messageReducer);
    const [category, setCategory] = useState('receive');
    const [member, setMember] = useState({})

    useEffect(
        () => {
            dispatch(getMessageDetail(messageId));
        }
    );

    useEffect(
        () => {
            const token = JSON.parse(window.localStorage.getItem('accessToken'));
            if (message.who?.memberId === token.memberId) {
                setCategory('send');
                setMember(message.whom);
            } else {
                setCategory('receive');
                setMember(message.who);
            }
        },
        [message]
    );

    const openModal = () => {
        window.open(`/sendMessage/${member?.memberId}`, 'message');
    }

    return (
        <div className="postMessage center back-color dis-flex flex-column justify-between">
            <div className='recipientInfo dis-flex align-center justify-between'>
                <div className="userInfo dis-flex align-center flex-column">
                    <img src={member?.profileImage} alt="프로필 이미지" />
                    <div>{member?.nickname}</div>
                </div>
                <div className='dis-flex align-center recordInfo'>
                    <div>
                        <div className="dis-flex align-center justify-between ">
                            <StarPoint starPoint={member?.starPoint} />
                            <div>{member?.starPoint}점</div>
                        </div>
                        <div className="dis-flex align-center justify-between ">
                            <div>펫시터 경력</div>
                            <div>{member?.petSitterCareer}</div>
                        </div>
                    </div>
                    <div className='messageBtn'>
                        {category === 'receive' ?
                            <button className="back-color" onClick={openModal}>답장</button> :
                            <button style={{ backgroundColor: 'white' }}></button>
                        }
                        <button className="back-color" onClick={() => navigate('/postMessageList')}>닫기</button>
                    </div>
                </div>
            </div>
            <textarea className='message' value={message.msgContent} />
        </div>
    )
}

export default PostMessage;