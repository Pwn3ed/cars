import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CarroForm = ({ carros, setCarros }) => {
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState();
    const [cor, setCor] = useState("");

    const addCarro = () => {
        const carro = {   
            id: uuidv4(),
            marca: marca,
            modelo: modelo,
            ano: ano,
            cor: cor
        };       

        setCarros([...carros, carro]);
    }

    return (
        <div className="CarroForm" >
            <h2>Adicionar Carro</h2>
            
            <label>
                <input type="text" value={marca} onChange={ (e) => setMarca(e.currentTarget.value) } placeholder="Marca" />
            </label>

            <label>
                <input type="text" value={modelo}  onChange={ (e) => setModelo(e.currentTarget.value) } placeholder="Modelo" />
            </label>

            <label>
                <input type="number" value={ano} onChange={ (e) => setAno(e.currentTarget.value) } placeholder="Ano" />
            </label>

            <label>
                <input type="text" value={cor} onChange={ (e) => setCor(e.currentTarget.value) } placeholder="Cor" />
            </label>

            <button onClick={addCarro} >Adicionar</button>

        </div>
    )
}

export default CarroForm;