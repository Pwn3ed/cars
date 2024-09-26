import { useState } from "react"
import Carro from "./Carro";
import { v4 as uuidv4 } from 'uuid'



const Carros = ({carros, setCarros}) => {

    return (
        <div className="Carros">
            <h1>Cars</h1>

            <div>
                <label>Filtro: </label>
                <select name="cars" id="cars">
                    <option value="">Carros a venda</option>
                    <option value="dsade">option 2</option>
                </select>
            </div>

            {
                carros.map( (carro, index) => <Carro key={index} carro={carro} carros={carros} setCarros={setCarros} /> )
            }
        </div>
    )
}

export default Carros