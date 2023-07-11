import { useDispatch, useSelector } from "react-redux";
import { SET_VALUE } from "../../modules/searchValue";

function PetSitterOptionBtn() {

    const dispatch = useDispatch();

    const searchValue = useSelector(state => state.searchReducer);

    const handleButtonClick = e => {

        const { name, value } = e.target;

        let updatedValue = [...searchValue[name]];

        if (updatedValue.indexOf(value) === -1) {
            updatedValue = [value];
        } else {
            updatedValue = updatedValue.filter(item => item !== value)
        }

        dispatch({ type: SET_VALUE, payload: { [name]: updatedValue } });
    };
    

    return (
        <div className="doglistbtn">
            <button
                name="petSize"
                value="소형,중형"
                onClick={handleButtonClick}
                className={`petmombtn ${searchValue.petSize.includes("소형,중형") ? "active" : ""}`}
            >
                소/중형
            </button>
            <button
                name="petSize"
                value="대형"
                onClick={handleButtonClick}
                className={`petmombtn ${searchValue.petSize.includes("대형") ? "active" : ""}`}
            >
                대형
            </button>
            <button
                name="care"
                value="산책"
                onClick={handleButtonClick}
                className={`petmombtn ${searchValue.care.includes("산책") ? "active" : ""}`}
            >
                산책
            </button>
            <button
                name="care"
                value="방문,출장"
                onClick={handleButtonClick}
                className={`petmombtn ${searchValue.care.includes("방문,출장") ? "active" : ""}`}
            >
                방문/출장
            </button>
        </div>
    );
}

export default PetSitterOptionBtn;