import React from "react";
import Logo from "../../assets/gurujiLogo.png";
import Avatar from "../../assets/header/profile.png";
import Customer from "../../assets/header/customer.png";
import Refund from "../../assets/header/refund.png";
import Private from "../../assets/header/private.png";
import Verified from "../../assets/header/verified.png";
import Secure from "../../assets/header/secure.png";
import DotDark from "../../assets/header/BDot.png";
import BlankDot from "../../assets/header/lDot.png";

function Header() {
	return (
		<div className="header">
			<nav className="navbar">
				<img src={Logo} alt="Logo" className="nav-logo" />

				<ul className="nav-links">
					<li>Home</li>
					<li>Call with an Astrologer</li>
					<li>Live(Coming soon)</li>
				</ul>

				<div className="profile">
					<img src={Avatar} alt="avatar" />
				</div>
			</nav>

			<div className="text-part">
				<h1 className="heading-primary">“Astrology for Clarity”</h1>
				<p className="para">
					Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
					Theraphy
				</p>

				<div className="btn btn-dark">Consult Now</div>
			</div>

			<div className="cta-bottom">
				<div className="img-row">
					<div className="img">
						<img src={Customer} alt="icon" />
						<p className="para">24 X 7 Customer Support</p>
					</div>

					<div className="img">
						<img src={Refund} alt="icon" />
						<p className="para">100% Refund if Unsatisfied</p>
					</div>

					<div className="img">
						<img src={Private} alt="icon" />
						<p className="para">Private & Confidential</p>
					</div>

					<div className="img">
						<img src={Verified} alt="icon" />
						<p className="para">Verified Astrologer</p>
					</div>

					<div className="img">
						<img src={Secure} alt="icon" />
						<p className="para">Secure Payment</p>
					</div>
				</div>

				<div className="dots">
					<img src={DotDark} alt="icon" />
					<img src={BlankDot} alt="icon" />
					<img src={BlankDot} alt="icon" />
				</div>
			</div>
		</div>
	);
}

export default Header;
