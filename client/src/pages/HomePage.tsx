
import axios from "axios";
import { useEffect, useState } from "react";
import Carro from "../components/Carro";
import Carros from "../components/Carros";
import CarroForm from "../components/CarroForm";

// const config = {
//     url: 'http://localhost:3000/cars',

// }



const Home = () => {
    const [carros, setCarros] = useState<Carro[]>([]);

    const fetchCarros = () => {
        axios.get('http://localhost:3000/cars')
            .then((response) => {
                console.log(response.data);
                setCarros(response.data);
            });
    }

    useEffect(() => {
        fetchCarros();
    }, []);

    return (
        <div className='main'>


                <Carros 
                carros={carros}
                setCarros={setCarros} 
                />

                {/* <CarroForm   
                carros={carros}
                setCarros={setCarros}
                /> */}

                <br/><br/><br/>
                <p>&copy; Made by Pwn3ed </p>


        </div>
    )
};

export default Home;