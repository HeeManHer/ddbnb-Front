import React, { useState } from "react";
import "../review/ReviewModal.css";

function ReviewModal() {
    const [rating, setRating] = useState(0); // 초기값은 0으로 설정
    const [images, setImages] = useState([]); // 이미지 첨부 상태

    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value);
        setRating(selectedRating);
    };


    const handleImageSelect = (event) => {
        const selectedImage = event.target.files[0];
        if (images.length < 5) {
            setImages([...images, selectedImage]); // 기존 이미지 배열에 새로운 이미지 추가
        }
    };

    const toggleSelected = (event) => {
        event.target.classList.toggle("selected");
    };

    return (
        <div className="reviewmodal">
            <div className="reviewmodal-header">리뷰 작성</div>
            <div className="reviewmodal-position">
                <div className="reviewmodal-main">별점등록</div>
                <div>
                    <fieldset>
                        <input
                            type="radio"
                            name="rating"
                            value="5"
                            id="rate1"
                            checked={rating === 5}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate1">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            id="rate2"
                            checked={rating === 4}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate2">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            id="rate3"
                            checked={rating === 3}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate3">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="2"
                            id="rate4"
                            checked={rating === 2}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate4">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="1"
                            id="rate5"
                            checked={rating === 1}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor="rate5">⭐</label>
                    </fieldset>
                    {rating}/5
                </div>
            </div>
            <div className="reviewmodal-main2">리뷰</div>
            <div>
                <textarea></textarea>
                <div className="imgAndBtn">
                    <h3>이미지첨부</h3>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageSelect}
                        disabled={images.length === 4} // 이미지 개수가 4개에 도달하면 비활성화
                    />
                    <label htmlFor="imageUpload" className="reviewmodal-imgbtn">
                        +
                    </label>
                </div>
                <div className="image-preview-container">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(image)}
                            alt={`첨부 이미지 ${index + 1}`}
                            className="reviewmodal-image"
                        />
                    ))}
                </div>
                <div className="reviewmodal-btns">
                    <button className="reviewmodal-btn" onClick={toggleSelected}>
                        작성
                    </button>
                    <button className="reviewmodal-btn" onClick={toggleSelected}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewModal;