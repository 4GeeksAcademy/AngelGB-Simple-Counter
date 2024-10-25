import React from "react";
import "/src/styles/index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


function Contador({ Uni, Dec, Cen, Mil, Decmil }) {

    return (
        <div className="contador container col-3 d-flex pt-5">
            <div><h1><FontAwesomeIcon icon={faClock} spin /></h1></div>
            <div><h1>{Decmil}</h1></div>
            <div><h1>{Mil}</h1></div>
            <div><h1>{Cen}</h1></div>
            <div><h1>{Dec}</h1></div>
            <div><h1>{Uni}</h1></div>
        </div>
        
    );
}
export default Contador;
