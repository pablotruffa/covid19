import React from 'react'
import './index.css';
import logo from './logoCuidar.jpg';

export const Vaccines = () => {
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;


    return (
        <div id='main'>
            <div id="logo" className="center">
            <span><img alt="logo" id="logoImg" src={logo}/></span>
            <h1>Información <br/>de salud</h1>
            <p>Es necesario que sigamos cuidándonos y respetando las medidas y recomendaciones sanitarias</p>
            </div>

            <div id="data" className="left">
                <h2>Roberto Oscar TRUFFA</h2>
                <p>DNI:14701392</p>
            </div>
            <div id="vacunacion" className="left">
                <h2>Vacunación Covid-19 Argentina</h2>
                <p className="green">Vacunación completa <span className="check">&#10004;&#10004;</span></p>
                <p className="grey">Fecha de última dosis: 20/11/2021</p>
            </div>
            <div id="diagnostico" className="left">
                <h2>Diagnóstico Covid-19</h2>
                <p className="grey">Sin test resgistrado en las últimas 48hs</p>
            </div>
            <div id="info" className="center">
                <p className="grey">
                Información proporcionada por el <br/>Ministerio de Salud de la Nación al <br/><span id="fecha">{today}</span>
                </p>
            </div>

        </div>
    )
}
