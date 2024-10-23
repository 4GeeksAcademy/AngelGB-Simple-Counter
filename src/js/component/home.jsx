import "/src/styles/index.css"
import React from "react";
import Contador from "./Contador";
import root from "..";


//create your first component
const Home = () => {
	const Iniciar = () => {
		let count = 0
		setInterval(function () {
			let countDecmil = Math.floor((count / 10000) % 10);
			let countMil = Math.floor((count / 1000) % 10);
			let countCen = Math.floor((count / 100) % 10);
			let countDec = Math.floor((count / 10) % 10);
			let countUni = Math.floor((count / 1) % 10);
			root.render(
				<Contador Uni={countUni} Dec={countDec} Cen={countCen} Mil={countMil} Decmil={countDecmil} />
			);
	
			count++;
		}, 1000);
	}
	
	return (
		<div className="text-center">
			<h1 className="text-white pt-4">Bienvenido a el contador</h1>
			<button onClick={() => {
				Iniciar()
			}} type="button" className="btn btn-light">Iniciar Contador</button>
			
		</div>
	);
	
};

export default Home;
// uni={countUni} dec={countDec} cen={countCen} mil={countMil} decmil={countDecmil} 
