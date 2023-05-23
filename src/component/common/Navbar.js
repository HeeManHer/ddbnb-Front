import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    return (
        <div className="menubar bottom-shadow dis-flex aling-center">
            <img src="/img/title.png" alt="댕댕비엔비" onClick={() => navigate("./main")} />
            <span onClick={() => navigate("/petSitter")} >펫시터 모집</span>
            <span onClick={() => navigate("/petMom")} >펫맘 모집</span>
            <span onClick={() => navigate("/about")} >ABOUT ME</span>
        </div>
    )
}

export default Navbar;