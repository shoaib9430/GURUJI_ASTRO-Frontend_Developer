import React from "react";
import star from "../../assets/star.png";
import left1 from "../../assets/animation logos/left1.png";
import left2 from "../../assets/animation logos/left2.png";
import left3 from "../../assets/animation logos/left3.png";
import left4 from "../../assets/animation logos/left4.png";
import left5 from "../../assets/animation logos/left5.png";

import right1 from "../../assets/animation logos/right1.png";
import right2 from "../../assets/animation logos/right2.png";
import right3 from "../../assets/animation logos/right3.png";
import right4 from "../../assets/animation logos/right4.png";
import right5 from "../../assets/animation logos/right5.png";

import chart from "../../assets/animation logos/rotate.png";
import sun from "../../assets/animation logos/sun.png";

function Chart() {
	return (
		<div className="chart content">
			<div className="heading-part">
				<img src={star} alt="icon" />
				<h2 className="heading-secondary">Many Problem one Solution</h2>
				<img src={star} alt="icon" />
			</div>

			<div className="chart-part">
				<div className="left-col col">
					<img src={left1} alt="icon" />
					<img src={left2} alt="icon" />
					<img src={left3} alt="icon" />
					<img src={left4} alt="icon" />
					<img src={left5} alt="icon" />
				</div>

				<div className="chart-img">
					<img src={chart} alt="img" className="chart-rotate" />
					<img src={sun} alt="img" className="sun" />
				</div>

				<div className="right-col col">
					<img src={right1} alt="icon" />
					<img src={right2} alt="icon" />
					<img src={right3} alt="icon" />
					<img src={right4} alt="icon" />
					<img src={right5} alt="icon" />
				</div>
			</div>
		</div>
	);
}

export default Chart;
