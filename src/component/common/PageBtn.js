import { useDispatch, useSelector } from "react-redux";
import { DECRESE_PAGE, INCRESE_PAGE, SET_PAGE } from "../../modules/currentPage";

function PageBtn({ pageInfo }) {

    const dispatch = useDispatch();

    const currentPage = useSelector(state => state.pageReducer);

    const pageAmount = [];
    if (pageInfo) {
        for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
            pageAmount.push(i);
        }
    }

    const nextPage = () => {
        if (currentPage + 1 <= pageInfo.maxPage) {
            dispatch({ type: INCRESE_PAGE });
        }
    }

    const prevPage = () => {
        if (currentPage - 1 >= 1) {
            dispatch({ type: DECRESE_PAGE });
        }
    }

    return (
        <div className="pageBtnBox dis-flex align-center">
            <button className="shiftBtn" onClick={prevPage}>&lt;</button>
            {pageAmount.map(page => (
                <button
                    key={page}
                    className="pageBtn"
                    onClick={() => dispatch({ type: SET_PAGE, payload: page })}
                    style={currentPage === page ? {
                        backgroundColor: '#FAB7A2'
                    }
                        : null}
                >
                    {page}
                </button>
            ))}
            <button className="shiftBtn" onClick={nextPage}>&gt;</button>
        </div>
    )
}

export default PageBtn;