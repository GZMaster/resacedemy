import React from "react";
import "../../styles/AboutCard.scss";

function AboutCard(props) {
	return (
		<div className="about__card" key={props.id}>
			<img className="about__card__img" src={props.src} alt="img" />
			<h6 className="about__card__header">{props.header}</h6>
			<h3 className="about__card__description">{props.description}</h3>
			<p className="about__card__text">{props.text1}</p>
			<p className="about__card__text">{props.text2}</p>
		</div>
	);
}

export default AboutCard;
