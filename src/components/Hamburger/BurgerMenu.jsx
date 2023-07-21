import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../../styles/BurgerMenu.scss";

const BurgerMenu = () => {
	const [isOpen, setOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<div>
			<Hamburger
				className="hamburger_button"
				toggled={isOpen}
				toggle={setOpen}
				direction="right"
				duration={0.8}
				color="#000"
				style={{ height: "1.5rem", width: "1.5rem" }}
			/>

			<div className={`panel ${isOpen ? "open" : "close"}`}>
				<ul>
					<li>
						<button onClick={() => navigate("/about")}>About Us</button>
					</li>
					<li>
						<button onClick={() => navigate("/enrollment")}>Enrollment</button>
					</li>
					<li>
						<button>Youtube</button>
					</li>
					<li>
						<button
							className="contact_button"
							onClick={() => navigate("/contact")}
						>
							Contact Us
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BurgerMenu;
