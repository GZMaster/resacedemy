import React from "react";
import UseMediaQuery from "../components/Mediaquery/UseMediaQuery";
import "../styles/Hero.scss";
import mini_shapes from "../assets/images/hero/mini-floating-shapes.svg";
import heroimages from "../assets/images/hero/hero-images.svg";
import mobileheroimage from "../assets/images/hero/hero-images-mobile.png";

const Hero = () => {
	let isPageWide = UseMediaQuery("(min-width: 480px)");
	return (
		<section id="hero" className="hero_container">
			<div className="hero_wrapper">
				<div className="hero_heading">
					<h1>
						Educating Individuals <span>with Special Needs.</span>
					</h1>

					<p>
						We provide inclusive education and support for students with special
						needs of all ages. Our tailored programs foster growth,
						independence, and meet the unique needs our student.
					</p>

					<button>Primary CTA</button>
				</div>

				<div className="hero_bacground_images">
					{isPageWide ? (
						<img src={mini_shapes} alt="mini floating shapes" />
					) : null}
				</div>

				<div className="hero_background_shapes">
					{isPageWide ? (
						<img src={heroimages} alt="hero images" />
					) : (
						<img src={mobileheroimage} alt="" />
					)}
				</div>
			</div>
		</section>
	);
};

export default Hero;
