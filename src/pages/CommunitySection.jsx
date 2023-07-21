import React from "react";
import UseMediaQuery from "../components/Mediaquery/UseMediaQuery";
import "../styles/CommunitySection.scss";
import star from "../assets/images/communitysection/star.svg";
import arrow from "../assets/images/communitysection/arrow-right.svg";

const CommunitySection = () => {
	let isPage = UseMediaQuery("(min-width: 480px)");
	return (
		<section className="communitysection_container">
			<div className="communitysection_wrapper">
				<div className="communitysection_content">
					<div className="communitysection_content_title">
						<h3>Community</h3>
						<h1>Join Our Community on Youtube.</h1>
					</div>

					<p>
						Through our engaging and informative YouTube channel, we share
						valuable insights and practical tips to better understand and
						effectively support individuals with special needs.
					</p>

					<button>
						YouTube Channel
						<img src={arrow} alt="arrow" />
					</button>
				</div>

				{isPage ? (
					<div className="communitysection_backgroungimg">
						<img src={star} alt="start" className="star1" />
						<img src={star} alt="start" className="star2" />
					</div>
				) : null}
			</div>
		</section>
	);
};

export default CommunitySection;
