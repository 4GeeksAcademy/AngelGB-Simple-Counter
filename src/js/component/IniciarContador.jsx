import React from "react";
import "/src/styles/index.css"
import Contador from "./Contador";
import root from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faBackward, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Home from "./home";

let count = 0
let contadoriniciado = 0
let iniciado = true
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
    const Volver = () => {
		Pausacontador()
        count = 0
		iniciado = true
		root.render(<Home />)
	};
}
export default Iniciarcontador