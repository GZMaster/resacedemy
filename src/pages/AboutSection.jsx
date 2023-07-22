import React from "react";
import UseMediaQuery from "../components/Mediaquery/UseMediaQuery";
import "../styles/AboutSection.scss";
import link_arrow from "../assets/images/aboutsection/arrow-right.png";
import union from "../assets/images/aboutsection/union.svg";
import mobileunion from "../assets/images/aboutsection/union.png";

const AboutSection = () => {
	let isPageMobile = UseMediaQuery("(max-width: 480px)");

	return (
		<section className="aboutus_container">
			<div className="aboutus_wrapper">
				<div className="aboutus_left">
					<h3>About us</h3>
					<h2>An Inspiring Journey to Empower Special Needs Education. </h2>
					<p>
						At Roseluyi, we are passionate about empowering special needs
						education. Founded with a vision to make a difference, our dedicated
						staff is committed to providing inclusive learning experiences for
						individuals of all ages with diverse abilities.{" "}
					</p>
					<p>
						Through innovative programs, collaborative partnerships, and a
						supportive community, we create a pathway for growth, independence,
						and lifelong success.
					</p>

					<button>
						<h3>Learn More</h3>
						<img src={link_arrow} alt="link-arrow" />
					</button>
				</div>

				<div className="aboutus_right">
					{isPageMobile ? (
						<img src={mobileunion} alt="" />
					) : (
						<img src={union} alt="" />
					)}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
