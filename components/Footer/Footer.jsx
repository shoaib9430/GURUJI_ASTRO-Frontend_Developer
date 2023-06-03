import React from "react";
import logo from "../../assets/gurujiLogo.png";
import razor from "../../assets/footer/trustedSeals/razorpay.png";
import paytm from "../../assets/footer/trustedSeals/paytm.png";
import stripe from "../../assets/footer/trustedSeals/stripe.png";

function Footer() {
	return (
		<footer className="footer">
			<div className="logo-part">
				<div className="about-guruji">
					<div className="logo">
						<div className="logo-box">
							<img src={logo} alt="logo" className="footer-logo" />
							<p className="para-logo">Guruji</p>
						</div>
						<p className="para">
							About Guruji s2 to 3 lines what guruji do and how it works About
							Guruji s2 to 3 lines what guruji do and how it works
						</p>
					</div>

					<div className="socialicons">
						<div className="icons">
							<i class="fa-brands fa-facebook fb"></i>
						</div>

						<div className="icons">
							<i class="fa-brands fa-instagram insta"></i>
						</div>

						<div className="icons">
							<i class="fa-brands fa-twitter twitter"></i>
						</div>

						<div className="icons">
							<i class="fa-brands fa-youtube yt"></i>
						</div>
					</div>
				</div>

				<div className="trusted">
					<h4 className="heading-tertiary">Trusted & Seals</h4>

					<div className="logos">
						<div className="box">
							<img src={razor} alt="logos" />
						</div>

						<div className="box">
							<img src={paytm} alt="logos" />
						</div>

						<div className="box">
							<img src={stripe} alt="logos" />
						</div>
					</div>
				</div>
			</div>

			<div className="links-part">
				<ul className="footer-list">
					<li className="heading-list list-items">Company</li>
					<li className="list-items">Home</li>
					<li className="list-items">Privacy Policy</li>
					<li className="list-items">T & C</li>
					<li className="list-items">Varied Payment</li>
				</ul>

				<ul className="footer-list">
					<li className="heading-list list-items">Support</li>
					<li className="list-items">Home</li>
					<li className="list-items">Privacy Policy</li>
					<li className="list-items">T & C</li>
					<li className="list-items">Varied Payment</li>
				</ul>

				<ul className="footer-list">
					<li className="heading-list list-items">Collaborate</li>
					<li className="list-items">Clever Top</li>
					<li className="list-items">Exotel</li>
					<li className="list-items">Facebook</li>
					<li className="list-items">Quora</li>
					<li className="list-items">Google</li>
					<li className="list-items">Youtube</li>
				</ul>

				<ul className="footer-list">
					<li className="heading-list list-items">Important Link</li>
					<li className="list-items">Tarot Reader</li>
					<li className="list-items">Vedic Astrology</li>
					<li className="list-items">Palmistry</li>
					<li className="list-items">Gemology</li>
					<li className="list-items">Vastu</li>
					<li className="list-items">Numerology</li>
				</ul>
			</div>

			<form className="form-part">
				<input type="text" placeholder="Your Name" required />
				<input type="email" placeholder="Mail Id" required />
				<textarea placeholder="Write query" required></textarea>
				<button className="btn-submit">Submit</button>
			</form>
		</footer>
	);
}

export default Footer;
