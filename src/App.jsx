import { useState } from 'react';
import './App.css'
import CarroForm from './components/CarroForm'
import Carros from "./components/Carros"
import { v4 as uuidv4 } from 'uuid';


const cars = [
  {   
      id: uuidv4(),
      marca: 'Chevrolet',
      modelo: 'Opala',
      ano: 1978,
      cor: 'Preto'
  },
  {   
      id: uuidv4(),
      marca: 'Volkswagen',
      modelo: 'Fusca',
      ano: 1975,
      cor: 'Amarelo'
  },
  {   
      id: uuidv4(),
      marca: 'Chevrolet',
      modelo: 'Chevette',
      ano: 1980,
      cor: 'Laranja'
  },
];


const App = () => {

  const [carros, setCarros] = useState(cars);

  return (
    <div className='main'>

        <CarroForm 
          carros={carros}
          setCarros={setCarros}
        />

        <Carros
          carros={carros}
          setCarros={setCarros} 
        />

        <br/><br/><br/>
        <p>&copy; Made by Pwn3ed </p>


    </div>
  )
}

export default App
