import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function StarPoint({ starPoint }) {
    // console.log(starPoint)
    const [score, setScore] = useState([false, false, false, false, false]);

    const starScore = starPoint => {
        let star = [...score];
        for (let i = 0; i < star.length; i++) {
            star[i] = i < starPoint ? true : false;
        }
        setScore(star);
    };
    // console.log(score)

    useEffect(() => {
        starScore(starPoint)
    }, [starPoint]
    );

    return (
        <div>
            {score.map((el, index) => (
                <FaStar
                    style={{ marginRight: "3px" }}
                    key={index}
                    size="18"
                    className={el ? 'yellowStar' : "grayStar"}
                ></FaStar>
            ))}
        </div>
    )
}

export default StarPoint;