import { useState } from "react"
import Carro from "./Carro";

type CarrosProps = {
    carros: Carro[],
    setCarros: React.Dispatch<React.SetStateAction<Carro[]>>
}

const Carros = ({carros, setCarros}: CarrosProps) => {

    const [isFilter, setIsFilter] = useState(true);
    const [showVenda, setShowVenda] = useState(false);

    const handleChange = (e: string) => {
        if (e == "true") {
            setShowVenda(false);
            setIsFilter(false);
        }
         else {
            setShowVenda(true);
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
                        .map( (carro, index) => <Carro key={index} carro={carro} carros={carros} setCarros={setCarros} showVendaButton={showVenda} /> )
                    :
                    carros.filter( (car) => car.venda != undefined )
                        .map( (carro, index) => <Carro key={index} carro={carro} carros={carros} setCarros={setCarros} showVenda={showVenda}/> )
                }
            </div>
        </div>
    )
}

export default Carros