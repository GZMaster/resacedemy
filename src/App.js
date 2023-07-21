import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/index";
import NavBar from "./components/Navbar/index";
import "./styles/app.scss";

export default function App() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}
