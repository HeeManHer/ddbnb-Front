import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMessageList } from "../../api/messageAPI";
import '../../css/message.css';
import PageBtn from "../../component/common/PageBtn";
import { useDispatch, useSelector } from "react-redux";

function PostMessageList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: message, pageInfo } = useSelector(state => state.messageReducer);

    const [criteria, setCriteria] = useState();

    useEffect(
        () => {
            dispatch(getMessageList());
        },
        []
    )

    return (
        <div className="postMessageList border-black center dis-flex flex-column justify-between">
            <h1>쪽지함</h1>
            <div className="dis-flex align-center justify-between">
                <div className="dis-flex align-center justify-between">
                    <button>삭제</button>
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
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PageBtn pageInfo={pageInfo} />
        </div>
    )
}




export default PostMessageList;
