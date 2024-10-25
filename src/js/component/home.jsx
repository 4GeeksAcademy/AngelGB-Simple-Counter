import React from "react";
import "/src/styles/index.css"
import Contador from "./Contador";
import root from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faBackward, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Iniciarcontador from "./IniciarContador";

const Home = () => {
	let contadoriniciado = 0
	let iniciado = true
	let countContrareloj = 0

	const Pedirtiempo = () => {
		root.render(
			<div className="container text-center text-white pt-5">
				<h1>Por favor ingresa desde que segundo quieres que empiece a retroceder</h1>
				<div className="mb-3 row justify-content-center pt-4">
					<div className="col-auto text-center">
						<input type="number" onChange={Guardado} className=" col-auto form-control" placeholder="Minimo 5 seg..." />
					</div>
					{/* ref={imputRef} */}
					<div className="col-auto text-center">
						<button onClick={() => { Iniciarcontrareloj() }} type="button" className="col btn btn-light">Iniciar Contrareloj</button>
					</div>

				</div>
			</div>
		)

		const Iniciarcontrareloj = () => {
			countContrareloj == "" || countContrareloj < 5 ? countContrareloj = 5 : countContrareloj
		
			contadoriniciado = setInterval(function () {
				let countDecmil2 = Math.floor((countContrareloj / 10000) % 10);
				let countMil2 = Math.floor((countContrareloj / 1000) % 10);
				let countCen2 = Math.floor((countContrareloj / 100) % 10);
				let countDec2 = Math.floor((countContrareloj / 10) % 10);
				let countUni2 = Math.floor((countContrareloj / 1) % 10);
		
				countContrareloj--;
		
				if (countContrareloj < 0) {
					Pausacontador()
					alert("El tiempo llego a su fin")
					countContrareloj = 0
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
			};

			const Reanudarcontador = () => {
				if (iniciado == false) {
					Iniciarcontrareloj()
					iniciado = true
				}
			};

			const Volver = () => {
				clearInterval(contadoriniciado)
				iniciado = true
				root.render(<Home />)
			};
		}		
	}

	const Guardado = (e) => {
		countContrareloj = parseInt(e.target.value)
	}

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
