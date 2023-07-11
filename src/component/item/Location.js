import { useState } from "react";
import sigunguList from '../../data/sigoongu.json';
import { useDispatch } from "react-redux";
import { SET_VALUE } from "../../modules/searchValue";

function Location() {
    const dispatch = useDispatch();

    // 시도 선택시 시군구 리스트 담음
    const [sigList, setSigList] = useState([]);

    const [sido, setSido] = useState("")

    const onChangeSidoHandler = (e) => {
        setSigList(
            sigunguList.filter(
                sig => sig.sig.sig_full_nm.startsWith(e.target.value)
            )
        );
        setSido(e.target.value)
    }

    const onChangeSigunguHandler = (e) => {
        dispatch({ type: SET_VALUE, payload: { location: `${sido} ${e.target.value}` } });
    }

    return (
        <>
            <select className="firstselect" id="sigungu" onChange={onChangeSidoHandler} readOnly>
                <option value="">시/도</option>
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="인천광역시">인천광역시</option>
                <option value="광주광역시">광주광역시</option>
                <option value="대전광역시">대전광역시</option>
                <option value="울산광역시">울산광역시</option>
                <option value="세종특별자치시">세종특별자치시</option>
                <option value="경기도">경기도</option>
                <option value="강원도">강원도</option>
                <option value="충청북도">충청북도</option>
                <option value="충청남도">충청남도</option>
                <option value="전라북도">전라북도</option>
                <option value="전라남도">전라남도</option>
                <option value="경상북도">경상북도</option>
                <option value="경상남도">경상남도</option>
                <option value="제주특별자치도">제주특별자치도</option>
            </select>

            <div className="sidogu">
                <select className="secondselect" id="sigungu" onChange={onChangeSigunguHandler} readOnly>
                    <option value="">시 / 군 / 구</option>
                    {sigList.map(sig => <option value={sig.sig.sig_kor_nm} key={sig.id}>{sig.sig.sig_kor_nm}</option>)}
                </select>
            </div>
        </>
    )
}

export default Location;