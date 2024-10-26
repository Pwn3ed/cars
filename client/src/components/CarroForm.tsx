import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Carro from "./Carro";

type CarroFormProps = {
    carros: Carro[],
    setCarros: React.Dispatch<React.SetStateAction<Carro[]>>
};

const CarroForm = ({ carros, setCarros }: CarroFormProps) => {
    const [name, setName] = useState("");
    const [modelName, setModelName] = useState("");
    const [bodyType, setBodyType] = useState("");
    const [modelType, setModelType] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    // {
    //     "id": "xc90-recharge",
    //     "modelName": "XC90 Recharge", 
    //     "bodyType": "suv",
    //     "modelType": "plug-in hybrid",
    //     "imageUrl": "/images/xc90_recharge.jpg"
    //   }

    const addCarro = () => {
        if (name && modelName && bodyType && modelType) {
            const carro = {   
                id: uuidv4(),
                name: id,
                bodyType: bodyType,
                modelType: modelType,
                imageUrl: imageUrl
            };       
    
            setCarros([...carros, carro]);
    
            setName("");
            setModelName("");
            setBodyType("");
            setModelType("");
            setImageUrl("");
        }
    }

    return (
        <div className="CarroForm" >
            <h2>Adicionar Carro</h2>
            
            <form action="." method="GET">
                <label>
                    <input  type="text" value={marca} onChange={ (e) => setMarca(e.currentTarget.value) } placeholder="Marca" required/>
                </label>

                <label>
                    <input required type="text" value={modelName}  onChange={ (e) => setModelName(e.currentTarget.value) } placeholder="Modelo" />
                </label>

                <label>
                    <input required type="text" value={ano} onChange={ (e) => setAno(Number(e.currentTarget.value)) } placeholder="Ano" />
                </label>

                <label>
                    <input required type="text" value={cor} onChange={ (e) => setCor(e.currentTarget.value) } placeholder="Cor" />
                </label>

                <button onClick={ addCarro }  >Adicionar</button>
            </form>

        </div>
    )
}

export default CarroForm;