import { useDispatch, useSelector } from "react-redux";
import { SET_VALUE } from "../../modules/searchValue";

function PetMomOptionBtn() {

    const dispatch = useDispatch();

    const searchValue = useSelector(state => state.searchReducer);

    const handleButtonClick = e => {

        const { name, value } = e.target;

        let updatedValue = [...searchValue[name]];

        if (updatedValue.indexOf(value) === -1) {
            updatedValue.push(value)
        } else {
            updatedValue = updatedValue.filter(item => item !== value)
        }

        dispatch({ type: SET_VALUE, payload: { [name]: updatedValue } });
    };

    return (
        <div className="doglistbtn">
            <button
                name="petYN"
                value="반려동물 없어요"
                className={`petmombtn ${searchValue.petYN.includes('반려동물 없어요') ? 'active' : ''}`}
                onClick={handleButtonClick}>
                반려동물 없어요
            </button>
            <button
                name="otherCondition"
                value="픽업가능"
                className={`petmombtn ${searchValue.otherCondition.includes('픽업가능') ? 'active' : ''}`}
                onClick={handleButtonClick}>
                픽업 가능
            </button>
            <button
                name="otherCondition"
                value="대형견 가능"
                className={`petmombtn ${searchValue.otherCondition.includes('대형견 가능') ? 'active' : ''}`}
                onClick={handleButtonClick}>
                대형견 가능
            </button>
            <button
                name="otherCondition"
                value="노견케어"
                className={`petmombtn ${searchValue.otherCondition.includes('노견케어') ? 'active' : ''}`}
                onClick={handleButtonClick}>
                노견 케어
            </button>
        </div>
    );
}

export default PetMomOptionBtn;