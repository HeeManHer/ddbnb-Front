import { useState } from 'react';
import '../../../css/message.css';

function SendMessage() {
    const [value, setValue] = useState('');

    return (
        <div className="postMessage back-color border-black dis-flex flex-column justify-between">
            <div className='recipientInfo dis-flex align-center justify-between'>
                <div className="userInfo dis-flex align-center flex-column">
                    <img src="/img/댕댕이.png" />
                    <div>기묭민</div>
                </div>
                <div className='dis-flex align-center recordInfo'>
                    <div>
                        <div className="dis-flex align-center justify-between ">
                            <div>견주 모집 기록</div>
                            <div>{1}회</div>
                        </div>
                        <div className="dis-flex align-center justify-between ">
                            <div>펫시터 참여 기록</div>
                            <div>{2}회</div>
                        </div>
                    </div>
                    <div className='messageBtn'>
                        <button className="back-color">보내기</button>
                        <button className="back-color" onClick={() => window.close()}>취소</button>
                    </div>
                </div>
            </div>
            <textarea className='message' value={value} onChange={e => setValue(e.target.value)} placeholder="내용을 입력해 주세요." />
        </div>
    )
}

export default SendMessage;