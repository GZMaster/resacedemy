import React from "react";
import '../styles/About.scss'	
import AboutCard from "../components/Card/AboutCard";
import AboutData from "../assets/data/AboutData";
import StaffData from "../assets/data/StaffData";
import StaffCard from "../components/Card/StaffCard";


const AboutPage = () => {
	return (
		<div className="about-origin">
			<div className="about__body">
			<div className="about__body__top">
				<img className="star" src="/images/star.svg" alt="star"/>
				<div className="about__body__top__text-container">
					<h6 className="about__body__top__text-container__heading">About US</h6>
					<p className="about__body__top__text-container__text">We are Committed to Making Learning Easier for Special Needs Individuals</p>
					
				</div>
				<img className="star2" src="/images/star.svg" alt="star"/>
			</div>
			<section className="about__body__mission">
				{AboutData.map((about) => (
					<AboutCard 
						src={about.img}
						description={about.description}
						header={about.header}
						text1={about.text1}
						text2={about.text2}
					/>
				))}
			</section>
			
			<div className="about__body__founder">
				<img className="founder-img" src="/images/founder.png" alt='founder'/>
				<div className="text-container">
					<p className="quote">“Every child is special, learns differently and learns at different speeds ”.</p>
					<h6 className="founders-name">Mrs Osariemen Aluyi</h6>
					<h3 className="founders-role">FOUNDER, Roseluyi Exceptional Students Academy</h3>
				</div>
					

			</div>

			<div className="about__body__staff">
				<div className="about__body__staff__text" >
					<h3>Meet Our Dedicated Staff</h3>
					<p>Passionate Individuals who are committed to Special needs education</p>
				</div>
				<div className="about__body__staff__grid">
					{StaffData.map((staff) => (
						<StaffCard 
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
						<img src="/images/government.png" alt='' />
						<h6>Edo State Government</h6>
					</div>
					<div className="about__body__partners__container__brand">
						<img src="/images/hospital.png" alt='hospital' />
						<h6>Federal Neuro Psychiatric Hospital</h6>
					</div>
					
					
					
				</div>
			</div>

		</div>
		<div className="about__body__enroll">
				<div className="about__body__enroll__left">
					<div className="intro-text">
						<h2>Enroll with Us Today!</h2>
						<p>Take the first step towards a brighter future for your loved one. Learn more about our programs and begin the enrollment process.</p>
						<button>Get in touch</button>
					</div>

					<div className="about__body__enroll__left__contact">
						<div className="school">
							<h2 className="school__header">School</h2>
							<h6>About Us</h6>
							<h6>Enrollment</h6>
						</div>

						<div className="get-in-touch">
							<h2>Get in touch</h2>
							<h6>Contact us</h6>
							<h6>spneeds@gmail.com</h6>
							<h6>09012341235</h6>
						</div>

						<div className="address">
							<h2>Address</h2>
							<p>No 14, Isiuwa Street, Dausi, Benin City, Edo State, Nigeria.</p>


					</div>
				</div>


				
			</div>
			<div className="about__body__enroll__right">

					<div className="column-1">
						<img classname='unionimg' src="/images/union.svg" alt="union"/>
						<img classname='infinityimg'src="/images/infinity.svg" alt="infinity" />
					</div>
					
					<div className="column-2">
						<img classname='starimg' src="/images/periwinkle2.svg" alt="periwinkle"/>
						<img classname='enrollimg' src="images/enrollPic.png" alt="enroll" />
					</div>

				</div>
		</div>

		</div>
		
	);
};

export default AboutPage;
