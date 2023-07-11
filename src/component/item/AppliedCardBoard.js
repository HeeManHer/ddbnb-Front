import style from './AppliedCardBoard.module.css';
import {useState } from "react";
import MyCardList from "../../component/list/AppliedList";

function AppliedCardBoard() {

    const [buttonId, setButtonId] = useState(5);

    const handleButtonClick = (id) => {
        setButtonId(id);
    };

    return (
<>
        <div className={style.bottomBoard}>
        <div className={style.careerTitle}>
            <button onClick={() => handleButtonClick(5)}>펫시터 신청 내역</button>
            <button onClick={() => handleButtonClick(6)}>펫맘 신청 내역</button>
        </div>
        {buttonId && <MyCardList buttonId={buttonId} />}
    </div>
    </>
    );
}

export default AppliedCardBoard;