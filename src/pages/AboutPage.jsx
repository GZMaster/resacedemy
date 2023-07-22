import React from "react";
import "../styles/About.scss";
import AboutCard from "../components/Card/AboutCard";
import AboutData from "../assets/data/AboutData";
import StaffData from "../assets/data/StaffData";
import StaffCard from "../components/Card/StaffCard";
import star from "../assets/images/aboutpage/star.svg";
import founder from "../assets/images/aboutpage/founder.png";

const AboutPage = () => {
	return (
		<div className="about-origin">
			<div className="about__body">
				<div className="about__body__top">
					<img className="star" src={star} alt="star" />
					<div className="about__body__top__text-container">
						<h6 className="about__body__top__text-container__heading">
							About US
						</h6>
						<p className="about__body__top__text-container__text">
							We are Committed to Making Learning Easier for Special Needs
							Individuals
						</p>
					</div>
					<img className="star2" src={star} alt="star" />
				</div>
				<div className="about__body__mission">
					{AboutData.map((about) => (
						<AboutCard
							key={about.id}
							src={about.img}
							description={about.description}
							header={about.header}
							text1={about.text1}
							text2={about.text2}
						/>
					))}
				</div>

				<div className="about__body__founder">
					<img className="founder-img" src={founder} alt="founder" />
					<div className="text-container">
						<p className="quote">
							“Every child is special, learns differently and learns at
							different speeds ”.
						</p>
						<h6 className="founders-name">Mrs Osariemen Aluyi</h6>
						<h3 className="founders-role">
							FOUNDER, Roseluyi Exceptional Students Academy
						</h3>
					</div>
				</div>

				<div className="about__body__staff">
					<div className="about__body__staff__text">
						<h3>Meet Our Dedicated Staff</h3>
						<p>
							Passionate Individuals who are committed to Special needs
							education
						</p>
					</div>
					<div className="about__body__staff__grid">
						{StaffData.map((staff) => (
							<StaffCard
								key={staff.id}
								src={staff.src}
								name={staff.name}
								role={staff.role}
							/>
						))}
					</div>
				</div>

				<div className="about__body__partners">
					<h1 className="partners">Partners & Collaborators</h1>
					<div className="about__body__partners__container">
						<div className="about__body__partners__container__brand1">
							<img src="src/assets/images/shapes/government.png" alt="government" />
							<h6>Edo State Government</h6>
						</div>
						<div className="about__body__partners__container__brand">
							<img src="src/assets/images/shapes/hospital.png" alt="hospital" />
							<h6>Federal Neuro Psychiatric Hospital</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
