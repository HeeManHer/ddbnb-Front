import React, { useEffect, useState } from "react";
import "../review/review.css";
import { useDispatch } from "react-redux";
import { registNewReview } from "../../../api/reviewListAPI";
import { json } from "react-router-dom";

function ReviewModal({ closeModalReview, index: memberId }) {

    const dispatch = useDispatch();

    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    const [form, setForm] = useState({
        member: { memberId: token.memberId },
        reviewer: { memberId },
        reviewDetail: "",
        reviewStarPoint: 0
    })

    const [image, setImage] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);

    useEffect(() => {
        // 이미지 업로드시 미리보기 세팅
        if (image.length > 0) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result) {
                    setImageUrl([...imageUrl, result]);
                }
            }
            fileReader.readAsDataURL(image[image.length - 1]);
        }
    }, [image]);

    const handleRatingChange = (e) => {
        setForm({ ...form, reviewStarPoint: parseInt(e.target.value) })
    };

    const handleImageSelect = (event) => {
        const img = event.target.files[0];
        setImage([...image, img]);
    };

    const handleSubmit = () => {
        // index에 대한 리뷰 작성 처리 로직
        // 작성 완료 후 모달 닫기
        // closeModalReview();

        const formData = new FormData();

        formData.append('newReview', new Blob([JSON.stringify(form)], { type: "application/json" }))


        if (image) {
            for (let index in image) {
                formData.append("img", image[index])
            }
        }

        console.log(formData.get('img'));



        dispatch(registNewReview(formData, closeModalReview))

    };

    const handleCancel = () => {
        // 작성 취소 처리 로직
        // 모달 닫기
        closeModalReview();
    };




    return (
        <div className="reviewmodal center">
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
                            checked={form.reviewStarPoint === 5}
                            onChange={handleRatingChange}
                        />
                        <label className="yellow" htmlFor="rate1">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            id="rate2"
                            checked={form.reviewStarPoint === 4}
                            onChange={handleRatingChange}
                        />
                        <label className="yellow" htmlFor="rate2">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            id="rate3"
                            checked={form.reviewStarPoint === 3}
                            onChange={handleRatingChange}
                        />
                        <label className="yellow" htmlFor="rate3">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="2"
                            id="rate4"
                            checked={form.reviewStarPoint === 2}
                            onChange={handleRatingChange}
                        />
                        <label className="yellow" htmlFor="rate4">⭐</label>
                        <input
                            type="radio"
                            name="rating"
                            value="1"
                            id="rate5"
                            checked={form.reviewStarPoint === 1}
                            onChange={handleRatingChange}
                        />
                        <label className="yellow" htmlFor="rate5">⭐</label>
                    </fieldset>
                    {form.reviewStarPoint}/5
                </div>
            </div>
            <div>
                <div>
                    <div className="reviewmodal-main2">리뷰</div>
                    <textarea value={form.reviewDetail} onChange={e => setForm({ ...form, reviewDetail: e.target.value })}></textarea>
                </div>
                <div className="imgAndBtn">
                    <h3>이미지첨부</h3>
                    <input
                        type="file"
                        id="imageUpload"
                        accept='image/jpg,image/png,image/jpeg,image/gif'
                        style={{ display: "none" }}
                        onChange={handleImageSelect}
                    // disabled={images.length === 4} // 이미지 개수가 4개에 도달하면 비활성화
                    />
                    <label className="yellow reviewmodal-imgbtn" htmlFor="imageUpload">
                        +
                    </label>
                </div>
                <div className="image-preview-container">
                    {Array.isArray(imageUrl) && imageUrl.map(url => <img
                        src={url}
                        alt={`첨부 이미지`}
                        className="reviewmodal-image"
                    />)}
                </div>
                <div className="reviewmodal-btns">
                    <button className="reviewmodal-btn" onClick={handleSubmit}>
                        작성
                    </button>
                    <button className="reviewmodal-btn" onClick={handleCancel}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewModal;