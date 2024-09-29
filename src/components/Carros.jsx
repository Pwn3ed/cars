import { useState } from "react"
import Carro from "./Carro";



const Carros = ({carros, setCarros}) => {

    const [isFilter, setIsFilter] = useState(true);
    const [showVenda, setShowVenda] = useState(false);

    const handleChange = (e) => {
        setShowVenda(e)
        if (e == "true") {
            setIsFilter(false);
        }
         else {
            setIsFilter(true);
        }

    }


    return (
        <div className="Carros">
            <h1>Cars</h1>

            <div>
                <label>Carros: </label>
                <select onChange={ (e) => handleChange(e.target.value) } name="cars" id="cars">
                    <option value="false">a venda</option>
                    <option value="true">vendidos</option>
                </select>
            </div>

            <div className="CarrosMap">
                {
                    isFilter ? 
                    carros.filter( (car) => car.venda == undefined )
                        .map( (carro, index) => <Carro key={index} carro={carro} carros={carros} setCarros={setCarros} showVendaButton={true} /> )
                    :
                    carros.filter( (car) => car.venda != undefined )
                        .map( (carro, index) => <Carro key={index} carro={carro} carros={carros} setCarros={setCarros} showVenda={showVenda}/> )
                }
            </div>
        </div>
    )
}

export default Carros