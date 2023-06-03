import React from "react";
import star from "../../assets/star.png";
import review from "../../assets/review.png";

function UserReview() {
	return (
		<div className="user-review">
			<div className="review content">
				<div className="heading-part">
					<img src={star} alt="icon" />
					<h2 className="heading-secondary">User Review</h2>
					<img src={star} alt="icon" />
				</div>

				<div className="review-card">
					<img src={review} alt="review-part" />
				</div>
			</div>
			<div className="pattern-part"></div>
		</div>
	);
}

export default UserReview;
