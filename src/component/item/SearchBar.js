import { useDispatch, useSelector } from "react-redux";
import Location from "./Location";
import { RESET_VALUE, SET_VALUE } from "../../modules/searchValue";

function SearchBar({ Option }) {
    const dispatch = useDispatch();

    const searchValue = useSelector(state => state.searchReducer);

    const onChangeHandler = (e) => {
        dispatch({ type: SET_VALUE, payload: { [e.target.name]: e.target.value } });
    };

    const reset = () => {
        dispatch({ type: RESET_VALUE })
    }

    return (
        <div className="mainpagebox">
            <div className="wherewhen">
                <h4 className="where">어디에 사시나요?</h4>
                <Location />
                <section className="whenrate">
                    <h4 className="when">언제 맡기길 원하시나요?</h4>
                    <div>
                        <input
                            className="dateselect1"
                            type="date"
                            name="startDate"
                            value={searchValue.startDate}
                            onChange={onChangeHandler}
                        />
                        <div className="wave">~</div>
                        <input
                            className="dateselect2"
                            type="date"
                            name="endDate"
                            value={searchValue.endDate}
                            onChange={onChangeHandler}
                        />
                    </div>
                </section>
            </div>
            <div>
                <h4 className="title">원하는 조건을 선택하세요</h4>
            </div>
            <div className="btnlist">
                <Option />
                <button className="doglistbtn align-center" onClick={reset}>초기화</button>
            </div>
        </div>
    )
}

export default SearchBar;