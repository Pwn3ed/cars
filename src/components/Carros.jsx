import { useState } from "react"
import Carro from "./Carro";

const cars = [
    {   
        id:'1',
        name:'Opala'
    },
    {
        id:'2',
        name:"Fusca"
    },
    {
        id:'3',
        name:'Chevete'
    }
];

const Carros = () => {
    const [carros, setCarros] = useState(cars);
    // const [carros, setCarros] = useState([{id:'1', name:"Opala"}, 2, 3]);

    console.log(carros)

    return (
        <>
            <h1>Cars</h1>
            {
                carros.map( (carro, index) => <Carro key={index} carro={carro} /> )
            }
        </>
    )
}

export default Carros