import React from "react";
import { useNavigate } from "react-router-dom";
import UseMediaQuery from "../Mediaquery/UseMediaQuery";
import "../../styles/Footer.scss";
import footerimg from "../../assets/images/footer/group-20.svg";
import mobilefooterimg from "../../assets/images/footer/group-14.png";
import dot from "../../assets/images/footer/ellipse-6.png";

const Footer = () => {
	const navigate = useNavigate();
	let isPageWide = UseMediaQuery("(min-width: 480px)");

	return (
		<section className="footer_container">
			<div className="footer_wrapper">
				<header>
					<div className="footer_left">
						<div className="footer_left_header">
							<h1>Enroll with Us Today!</h1>
							<p>
								Take the first step towards a brighter future for your loved
								one. Learn more about our programs and begin the enrollment
								process.
							</p>
							<button>Get in touch</button>

							{isPageWide ? null : <img src={mobilefooterimg} alt="" />}
						</div>
						<div className="footer_left_footer">
							<div className="footer_left_footer_links">
								<h3>School</h3>
								<button onClick={() => navigate("/about")}>About us</button>
								<button onClick={() => navigate("/enrollment")}>
									Enrollment
								</button>
							</div>
							<div className="footer_left_footer_contact">
								<h3>Get in touch</h3>
								<p>Contact us</p>
								<p>spneeds@gmail.com</p>
								<p>08023041697</p>
							</div>
							<div className="footer_left_footer_address">
								<h3>Address</h3>
								<p>
									No 14, Isiuwa Street, Dausi, Benin City, Edo State, Nigeria.
								</p>
							</div>
						</div>
					</div>
					{isPageWide ? null : (
						<div className="footer_right">
							<img src={footerimg} alt="" />
						</div>
					)}
				</header>

				<footer>
					<div className="footer_center">
						<p>Copyright © 2023 RoseluyiAcademy. All rights reserved.</p>
						{isPageWide ? <img src={dot} alt="" /> : null}
						<h3>
							Designed by <span>RetroDevelopers.</span>
						</h3>
					</div>
				</footer>
			</div>
		</section>
	);
};

export default Footer;
