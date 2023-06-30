import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentMember } from '../../../api/MemberAPICalls';
import { registMessageDetail } from "../../../api/messageAPI";
import StarPoint from '../../item/StarPoint';

function SendMessage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const member = useSelector(state => state.memberReducer);
    const { memberId } = useParams();

    const token = JSON.parse(window.localStorage.getItem('accessToken'));
    const [form, setForm] = useState({
        who: { memberId: token.memberId },
        whom: { memberId: memberId },
        msgContent: ''
    })

    useEffect(
        () => {
            dispatch(getCurrentMember(memberId));
        },
        []
    );

    const sendMessage = () => {
        dispatch(registMessageDetail(form));
        // navigate('/postMessageList')
    }


    return (
        <div className="postMessage center back-color dis-flex flex-column justify-between">
            <div className='recipientInfo dis-flex align-center justify-between'>
                <div className="userInfo dis-flex align-center flex-column">
                    <img src={member?.profileImage} />
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
                            <div>{member.petSitterCareer}</div>
                        </div>
                    </div>
                    <div className='messageBtn'>
                        <button className="back-color" onClick={sendMessage}>보내기</button>
                        <button className="back-color" onClick={() => navigate('/postMessageList')}>취소</button>
                    </div>
                </div>
            </div>
            <textarea className='message' value={form.msgContent} onChange={e => setForm({ ...form, msgContent: e.target.value })} placeholder="내용을 입력해 주세요." />
        </div>
    )
}

export default SendMessage;