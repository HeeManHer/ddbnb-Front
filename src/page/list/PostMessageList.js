import { useEffect, useState } from "react";
import { deleteMessage, getMessageList } from "../../api/messageAPI";
import '../../css/message.css';
import PageBtn from "../../component/common/PageBtn";
import { useDispatch, useSelector } from "react-redux";

function PostMessageList() {

    const dispatch = useDispatch();

    const { data: message, pageInfo } = useSelector(state => state.messageReducer);
    const currentPage = useSelector(state => state.pageReducer);
    const [criteria, setCriteria] = useState();
    const [deleteList, setDeleteList] = useState([]);
    const [category, setCategory] = useState('receive');

    useEffect(
        () => {
            const token = JSON.parse(window.localStorage.getItem('accessToken'));
            dispatch(getMessageList(currentPage, category, token.memberId));
        },
        [currentPage, category]
    )

    const deleteListSetting = e => {
        if (e.target.checked) {
            setDeleteList([...deleteList, e.target.value]);
        } else {
            setDeleteList(deleteList.filter(item => item !== e.target.value));
        }
    }

    const openModal = (id) => {
        window.open(`/postMessage/${id}`, 'message');
    }

    return (
        <div className="postMessageList  dis-flex flex-column">
            <h1>{category === 'receive' ? '받은' : '보낸'} 쪽지함</h1>
            <div className="msgMenu dis-flex align-center justify-between">
                <h3 style={category === 'receive' ? { color: '#FAB7A2' } : null} onClick={() => setCategory('receive')}>받은 쪽지</h3>
                <h3 style={category === 'send' ? { color: '#FAB7A2' } : null} onClick={() => setCategory('send')}>보낸 쪽지</h3>
            </div>
            <div className="dis-flex align-center justify-between">
                <div className="dis-flex align-center justify-between">
                    <button onClick={() => dispatch(deleteMessage(deleteList))}>삭제</button>
                    <button>신고</button>
                    {/* <button>답장</button> */}
                </div>
                <div>
                    <select name="" id="" onChange={e => setCriteria(e.target.value)}>
                        <option value="defalt">기준</option>
                        <option value="name">{category === 'receive' ? '받은' : '보낸'} 사람</option>
                        <option value="title">내용</option>
                        <option value="date">작성일</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>{category === 'receive' ? '받은' : '보낸'} 사람</th>
                        <th>내용</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(message) && message.map(item => (
                        <tr key={item?.msgId}>
                            <td><input type="checkbox" value={item?.msgId} onChange={deleteListSetting} /></td>
                            <td onClick={() => openModal(item?.msgId)}>{category === 'receive' ? item?.who?.nickname : item?.whom?.nickname}</td>
                            <td onClick={() => openModal(item?.msgId)}>{item?.msgContent}</td>
                            <td onClick={() => openModal(item?.msgId)}>{item?.writeDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}




export default PostMessageList;
