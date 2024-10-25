import "/src/styles/index.css"
import { useRef } from "react";
import React from "react";
import Contador from "./Contador";
import root from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faBackward, faRotateRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	const imputRef = useRef(0);
	let countContrareloj = 0
	let count = 0
	let contadoriniciado = 0
	let iniciado = true
	const Pedirtiempo = () => {
		root.render(
			<div className="container text-center text-white pt-5">
				<h1>Por favor ingresa desde que segundo quieres que empiece a retroceder</h1>
				<div className="mb-3 row justify-content-center pt-4">
					<div className="col-auto text-center">
						<input type="number" ref={imputRef} className=" col-auto form-control" placeholder="Minimo 5 seg..." />
					</div>

					<div className="col-auto text-center">
						<button onClick={() => { Guardado() }} type="button" className="col btn btn-light">Iniciar Contrareloj</button>
					</div>

				</div>
			</div>
		)
	}
	const Guardado = () => {
		let imputValue = imputRef.current.value;
		imputValue < 5 || imputValue === "" ? imputValue = 5 : imputValue
		countContrareloj = imputValue
		Iniciarcontrareloj()
	}
	const Iniciarcontrareloj = () => {

		contadoriniciado = setInterval(function () {
			let countDecmil2 = Math.floor((countContrareloj / 10000) % 10);
			let countMil2 = Math.floor((countContrareloj / 1000) % 10);
			let countCen2 = Math.floor((countContrareloj / 100) % 10);
			let countDec2 = Math.floor((countContrareloj / 10) % 10);
			let countUni2 = Math.floor((countContrareloj / 1) % 10);

			countContrareloj--;

			if (countContrareloj < 0) {
				countContrareloj = 0
				alert ("El tiempo llego a su fin")
				Pausacontador()
			}

			root.render(
				<div>
					<Contador Uni={countUni2} Dec={countDec2} Cen={countCen2} Mil={countMil2} Decmil={countDecmil2} />
					<div className="container text-center">
						<div className="btn-group mt-4" role="group" aria-label="Basic outlined example">
							<button onClick={() => { Pausacontador() }} type="button" className="btn btn-light"><FontAwesomeIcon icon={faPause} /></button>
							<button onClick={() => { Reanudarcontador() }} type="button" className="btn btn-light"><FontAwesomeIcon icon={faPlay} /></button>

						</div>
						<div className="container text-center">
							<button onClick={() => { Volver() }} type="button" className=" mt-4 btn btn-light"><FontAwesomeIcon icon={faBackward} /> Volver a pagina principal</button>
						</div>
					</div>

				</div>
			);


		}, 1000)
		const Pausacontador = () => {
			if (iniciado == true) {
				clearInterval(contadoriniciado)
				iniciado = false
			}
			;
		};
		const Reanudarcontador = () => {
			if (iniciado == false) {
				Iniciarcontrareloj()
				iniciado = true
			}
		};
	}
	const Iniciarcontador = () => {
		contadoriniciado = setInterval(function () {
			let countDecmil = Math.floor((count / 10000) % 10);
			let countMil = Math.floor((count / 1000) % 10);
			let countCen = Math.floor((count / 100) % 10);
			let countDec = Math.floor((count / 10) % 10);
			let countUni = Math.floor((count / 1) % 10);
			root.render(
				<div>
					<Contador Uni={countUni} Dec={countDec} Cen={countCen} Mil={countMil} Decmil={countDecmil} />
					<div className="container text-center">
						<div className="btn-group mt-4" role="group" aria-label="Basic outlined example">
							<button onClick={() => { Pausacontador() }} type="button" className="btn btn-light"><FontAwesomeIcon icon={faPause} /></button>
							<button onClick={() => { Reanudarcontador() }} type="button" className="btn btn-light"><FontAwesomeIcon icon={faPlay} /></button>
							<button onClick={() => { Reiniciar() }} type="button" className="btn btn-light"><FontAwesomeIcon icon={faRotateRight} /></button>
						</div>
						<div className="container text-center">
							<button onClick={() => { Volver() }} type="button" className=" mt-4 btn btn-light"><FontAwesomeIcon icon={faBackward} /> Volver a pagina principal</button>
						</div>
					</div>

				</div>
			);

			count++;
		}, 1000)

		const Pausacontador = () => {
			if (iniciado == true) {
				clearInterval(contadoriniciado)
				iniciado = false
			}
			;
		};
		const Reanudarcontador = () => {
			if (iniciado == false) {
				Iniciarcontador()
				iniciado = true
			}
		};
		const Reiniciar = () => {
			clearInterval(contadoriniciado)
			count = 0;
			iniciado = true
			Iniciarcontador()
		};
	}
	const Volver = () => {
		clearInterval(contadoriniciado)
		iniciado = true
		root.render(<Home />)
	};
	return (
		<div className="text-center">
			<h1 className="text-white pt-4">Bienvenido a la web</h1>
			<h3 className="text-white">Por favor elija entre las opciones.</h3>
			<div className="mt-4">
				<div className="btn-group mt-4" role="group" aria-label="Basic outlined example">
					<button onClick={() => {
						Iniciarcontador()
					}} type="button" className="btn btn-light">Iniciar Contador</button>
					<button onClick={() => {
						Pedirtiempo()
					}} type="button" className="btn btn-light">Iniciar Contrareloj</button>
				</div>
			</div>


		</div>
	)

};

export default Home;
