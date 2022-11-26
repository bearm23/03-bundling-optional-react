import React from "react";
import { createRoot } from "react-dom/client";
import classes from './scss/app.scss';
import logo from './assets/logo.png';

const root = createRoot(document.getElementById("root"));

root.render(
	<div className={classes.content}>
		<div className={classes.title}>
			<h1>Hola Mundo con React!</h1>
		</div>
		<img src={logo} alt="logo" />
	</div>
);