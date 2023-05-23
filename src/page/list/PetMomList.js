import { useNavigate } from "react-router-dom";

function PetMomList() {

    const navigate = useNavigate()
    return (
        <>
            <h1 >PetMomList</h1>
            <h2 onClick={() => navigate("./1")} >Go PetMomListDetail</h2>
            <h2 onClick={() => navigate("./recruit")} >Go PetMomRecruit</h2>
        </>
    )
}

export default PetMomList;