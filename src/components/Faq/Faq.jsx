import React, { useState } from "react";
import FaqData from "../../assets/data/FaqData";
import openbt from "../../assets/images/shapes/open-circle.svg";
import closebt from "../../assets/images/shapes/close-circle.svg";
import "../../styles/Faq.scss";

function Faq() {
	const [openIndex, setOpenIndex] = useState(0); // initialize state for the index of the open question

	return (
		<div className="faqpage">
			<div className="faqpage__header">
				<p> Frequently asked questions</p>
			</div>
			<div className="faqpage__body">
				<div className="faqpage__body__items">
					{FaqData.map((item, index) => (
						<div className="faqpage__body__item" key={index}>
							<div className="faqpage__body__item__question">
								<h1>{item.question}</h1>
								<button
									className="faqpage__body__item__question__button"
									onClick={() => {
										if (openIndex === index) {
										  setOpenIndex(-1);
										} else {
										  setOpenIndex(index);
										}
									  }}
										
								>
									<img
										src={openIndex === index ? closebt : openbt}
										alt="open and close button"
									/>
								</button>
							</div>
							{openIndex === index && (
								<div className="faqpage__body__item__answer">
									<p>{item.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Faq;
