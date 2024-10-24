import { useState } from 'react';
import './App.css'
import CarroForm from './components/CarroForm'
import Carros from "./components/Carros"
import Carro from './components/Carro';

const App = () => {

  const [carros, setCarros] = useState<Carro[]>([]);

  return (
    <div className='main'>

        <Carros 
          carros={carros}
          setCarros={setCarros} 
        />

        <CarroForm 
          carros={carros}
          setCarros={setCarros}
        />

        <br/><br/><br/>
        <p>&copy; Made by Pwn3ed </p>


    </div>
  )
}

export default App
