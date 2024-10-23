import React from "react";
import "/src/styles/index.css"


function Contador({ Uni, Dec, Cen, Mil, Decmil}) {
 
    return (
        <div className="contador container col-3 d-flex pt-5">
                    <div><h1>Icono</h1></div>
                    <div><h1>{Decmil}</h1></div>
                    <div><h1>{Mil}</h1></div>
                    <div><h1>{Cen}</h1></div>
                    <div><h1>{Dec}</h1></div>
                    <div><h1>{Uni}</h1></div>
                </div>
            );
        }        
        export default Contador;
