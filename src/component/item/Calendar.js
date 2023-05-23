import "../../css/calendar.css";
import { useEffect, useState } from 'react';

function Calendar() {
    const [data, setData] = useState();
    const [today, setToday] = useState(new Date());
    const [nowDate] = useState(new Date());

    useEffect(
        () => {
            setData(getData());
        },
        [today]
    )

    const prevCalendar = () => {
        setToday(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
    }

    const nextCalendar = () => {
        setToday(new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()));
    }

    const getData = () => {
        const date = new Array();

        let doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        let dom = 1;

        let daysLength = (Math.ceil((doMonth.getDay() + lastDate.getDate()) / 7) * 7) - doMonth.getDay();

        for (let day = 1 - doMonth.getDay(); daysLength >= day; day++) {
            if (today.getFullYear() === nowDate.getFullYear()) {
                if (today.getMonth() === nowDate.getMonth()) {
                    if (nowDate.getDate() > day && Math.sign(day) === 1) {
                        if (dom % 7 === 1) {
                            date.push(<td className="sunday back-gray">{autoLeftPad(day, 2)}</td>);
                        } else if (dom % 7 === 0) {
                            date.push(<td className="saturday back-gray">{autoLeftPad(day, 2)}</td>)
                        } else {
                            date.push(<td className="back-gray">{autoLeftPad(day, 2)}</td>)
                        }
                    }
                    else if (nowDate.getDate() < day && lastDate.getDate() >= day) {
                        if (dom % 7 === 1) {
                            date.push(<td className="sunday back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>);
                        } else if (dom % 7 === 0) {
                            date.push(<td className="saturday back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>)
                        } else {
                            date.push(<td className="back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>)
                        }
                    }
                    else if (nowDate.getDate() === day) {
                        if (dom % 7 === 1) {
                            date.push(<td className="sunday back-whiteYellow isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>);
                        } else if (dom % 7 === 0) {
                            date.push(<>
                                <td className="saturday back-whiteYellow isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>
                                <tr></tr>
                            </>)
                        } else {
                            date.push(<td className="back-whiteYellow isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>)
                        }
                    } else {
                        let exceptDay = new Date(doMonth.getFullYear(), doMonth.getMonth(), day);
                        date.push(<td className="otherday">{autoLeftPad(exceptDay.getDate(), 2)}</td>)
                    }
                } else if (today.getMonth() < nowDate.getMonth()) {
                    if (Math.sign(day) === 1 && lastDate.getDate() >= day) {
                        if (dom % 7 === 1) {
                            date.push(<td className="sunday back-gray">{autoLeftPad(day, 2)}</td>);
                        } else if (dom % 7 === 0) {
                            date.push(<td className="saturday back-gray">{autoLeftPad(day, 2)}</td>)
                        } else {
                            date.push(<td className="back-gray">{autoLeftPad(day, 2)}</td>)
                        }
                    } else {
                        let exceptDay = new Date(doMonth.getFullYear(), doMonth.getMonth(), day);
                        date.push(<td className="otherday">{autoLeftPad(exceptDay.getDate(), 2)}</td>)
                    }
                }
                else {
                    if (Math.sign(day) === 1 && lastDate.getDate() >= day) {
                        if (dom % 7 === 1) {
                            date.push(<td className="sunday back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>);
                        } else if (dom % 7 === 0) {
                            date.push(<td className="saturday back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>)
                        } else {
                            date.push(<td className="back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>)
                        }
                    } else {
                        let exceptDay = new Date(doMonth.getFullYear(), doMonth.getMonth(), day);
                        date.push(<td className="otherday">{autoLeftPad(exceptDay.getDate(), 2)}</td>)
                    }
                }
            }
            else if (today.getFullYear() < nowDate.getFullYear()) {
                if (Math.sign(day) === 1 && lastDate.getDate() >= day) {
                    if (dom % 7 === 1) {
                        date.push(<td className="sunday back-gray">{autoLeftPad(day, 2)}</td>);
                    } else if (dom % 7 === 0) {
                        date.push(<td className="saturday back-gray">{autoLeftPad(day, 2)}</td>)
                    } else {
                        date.push(<td className="back-gray">{autoLeftPad(day, 2)}</td>)
                    }
                } else {
                    let exceptDay = new Date(doMonth.getFullYear(), doMonth.getMonth(), day);
                    date.push(<td className="otherday">{autoLeftPad(exceptDay.getDate(), 2)}</td>)
                }
            }
            else {
                if (Math.sign(day) === 1 && lastDate.getDate() >= day) {
                    if (dom % 7 === 1) {
                        date.push(<td className="sunday back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>);
                    } else if (dom % 7 === 0) {
                        date.push(<td className="saturday back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>)
                    } else {
                        date.push(<td className="back-white isPointer" onClick={calendarChoiceDay}>{autoLeftPad(day, 2)}</td>)
                    }
                } else {
                    let exceptDay = new Date(doMonth.getFullYear(), doMonth.getMonth(), day);
                    date.push(<td className="otherday">{autoLeftPad(exceptDay.getDate(), 2)}</td>)
                }
            }
            dom++;
        }

        const data = new Array();
        for (let i = 0; i < date.length; i += 7) {
            data.push(
                <tr key={i}>
                    {date[i]}
                    {date[i + 1]}
                    {date[i + 2]}
                    {date[i + 3]}
                    {date[i + 4]}
                    {date[i + 5]}
                    {date[i + 6]}
                </tr>
            )
        }
        return data;
    }

    const autoLeftPad = (num, digit) => {
        if (String(num).length < digit) {
            num = new Array(digit - String(num).length + 1).join("0") + num;
        }
        return num;
    }

    const calendarChoiceDay = e => {
        if (e.target.className.indexOf(" choiceDay") >= 1) {
            e.target.className = e.target.className.replace(" choiceDay", "")
        } else {
            e.target.className += " choiceDay";
        }
    }

    return (
        <div>
            <table className="scriptCalendar">
                <thead>
                    <tr>
                        <td className="calendarBtn" id="btnPrevCalendar" onClick={prevCalendar}>&#60;&#60;</td>
                        <td colSpan="5">
                            <span id="calYear">{today.getFullYear()}년 </span>
                            <span id="calMonth">{autoLeftPad((today.getMonth() + 1), 2)}</span>월
                        </td>
                        <td className="calendarBtn" id="nextNextCalendar" onClick={nextCalendar}>&#62;&#62;</td>
                    </tr>
                    <tr>
                        <td>일</td>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;