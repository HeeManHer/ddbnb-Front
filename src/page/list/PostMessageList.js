import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteMessage, getMessageList } from "../../api/messageAPI";
import '../../css/message.css';
import PageBtn from "../../component/common/PageBtn";
import { useDispatch, useSelector } from "react-redux";

function PostMessageList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: message, pageInfo } = useSelector(state => state.messageReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const [criteria, setCriteria] = useState();
    const [deleteList, setDeleteList] = useState([]);

    useEffect(
        () => {
            const token = JSON.parse(window.localStorage.getItem('accessToken'));
            dispatch(getMessageList(currentPage, token.memberId));
        },
        [currentPage]
    )
    console.log(deleteList)

    const deleteListSetting = e => {
        if (e.target.checked) {
            setDeleteList([...deleteList, e.target.value]);
        } else {
            setDeleteList(deleteList.filter(item => item !== e.target.value));
        }
    }


    return (
        <div className="postMessageList border-black center dis-flex flex-column justify-between">
            <h1>쪽지함</h1>
            <div className="dis-flex align-center justify-between">
                <div className="dis-flex align-center justify-between">
                    <button onClick={() => dispatch(deleteMessage(deleteList))}>삭제</button>
                    <button>신고</button>
                    <button>답장</button>
                </div>
                <div>
                    <select name="" id="" onChange={e => setCriteria(e.target.value)}>
                        <option value="defalt">기준</option>
                        <option value="name">기준1</option>
                        <option value="title">기준2</option>
                        <option value="date">기준3</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>보낸 사람</th>
                        <th>내용</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(message) && message.map(item => (
                        <tr key={item?.msgId}>
                            <td><input type="checkbox" value={item?.msgId} onChange={deleteListSetting} /></td>
                            <td>{item?.who?.nickname}</td>
                            <td>{item?.msgContent}</td>
                            <td>{item?.writeDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}




export default PostMessageList;
