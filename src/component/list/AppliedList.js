import React from 'react';
import AppliedCardBoard from '../item/AppliedCardBoard';
import ReviewCardBoard from '../item/ReviewCardBoard';
import MyPetSitterCardBoard from '../item/MyPetSitterCardBoard';
import MyPetMomCardBoard  from '../item/MyPetMomCardBoard';


function MyCardList({ buttonId }) {
    let cardBoardComponent;

    if (buttonId === 1) {
        cardBoardComponent = <ReviewCardBoard/>;
    } else if (buttonId === 2) {
        cardBoardComponent = <AppliedCardBoard />;
    } else if (buttonId === 3) { 
        cardBoardComponent = <MyPetSitterCardBoard />;
    } else if (buttonId === 4) { 
        cardBoardComponent = <MyPetMomCardBoard />;
    } 

    return <>{cardBoardComponent}</>;
}

export default MyCardList;