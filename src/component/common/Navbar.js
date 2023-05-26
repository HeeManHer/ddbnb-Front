import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RESET_PAGE } from "../../modules/currentPage";

function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goPetSitter = () => {
        dispatch({ type: RESET_PAGE });
        navigate("/petSitter");
    }

    const goPetMom = () => {
        dispatch({ type: RESET_PAGE });
        navigate("/petMom");
    }

    return (
        <div className="menubar bottom-shadow dis-flex align-center">
            <img src="/img/title.png" alt="댕댕비엔비" onClick={() => navigate("./main")} />
            <span onClick={goPetSitter} >펫시터 모집</span>
            <span onClick={goPetMom} >펫맘 모집</span>
            <span onClick={() => navigate("/about")} >ABOUT ME</span>
        </div>
    )
}

export default Navbar;