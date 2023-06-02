function PostMessage() {
    const value = '안녕하세요 허희만 입니다.\n이것은 쪽지 테스트 입니다.'

    const openModal = () => {
        // window.close();

        const modal_width = '500';
        const modal_height = '500';

        const window_width = (window.screen.width - modal_width) / 2;
        const window_height = (window.screen.height - modal_height) / 2;

        const option = `width=${modal_width},height=${modal_height}, left=${window_width}, top=${window_height}, scrollbars=no`;

        window.open('/sendMessage', 'message', option);
    }

    return (
        <div className="postMessage back-color dis-flex flex-column justify-between">
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
                        <button className="back-color" onClick={openModal}>답장</button>
                        <button className="back-color" onClick={() => window.close()}>취소</button>
                    </div>
                </div>
            </div>
            <textarea className='message' value={value} placeholder="내용을 입력해 주세요." readOnly />
        </div>
    )
}

export default PostMessage;