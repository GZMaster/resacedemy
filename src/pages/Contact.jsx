import React from "react";
import UseMediaQuery from "../components/Mediaquery/UseMediaQuery";
import "../styles/Contact.scss";
import headerImg from "../assets/images/contactus/group-27.svg";
import contentImg from "../assets/images/contactus/group-24.svg";

const Contact = () => {
	let isPageMobile = UseMediaQuery("(max-width: 480px)");
	return (
		<div className="contactus_container">
			<div className="contactus_wrapper">
				<header>
					<h3>About us</h3>
					<h1>Get in Touch with Us</h1>
					<p>
						Reach out to us for enrollment inquiries or to learn more about our
						programs.
					</p>
					{isPageMobile ? null : <img src={headerImg} alt="" />}
				</header>

				<body>
					<div className="body_left">
						<img src={contentImg} alt="" />
					</div>
					<div className="body_right">
						<form>
							<div className="form_group">
								<div>
									<label htmlFor="firstName">First Name</label>
									<input type="text" name="firstName" id="firstName" />
								</div>

								<div>
									<label htmlFor="lastName">Last Name</label>
									<input type="text" name="lastName" id="lastName" />
								</div>
							</div>

							<div className="form_group">
								<div>
									<label htmlFor="phoneNumber">Phone Number</label>
									<input type="text" name="phoneNumber" id="phoneNumber" />
								</div>

								<div>
									<label htmlFor="email">Email</label>
									<input type="text" name="email" id="email" />
								</div>
							</div>

							<div className="form_group">
								<div>
									<label htmlFor="message">Message</label>
									<textarea
										name="message"
										id="message"
										cols="30"
										rows="10"
									></textarea>
								</div>
							</div>

							<button type="submit">Send message</button>
						</form>
					</div>
				</body>
			</div>
		</div>
	);
};

export default Contact;
