

const Carro = ({ carro, carros, setCarros }) => {
    const removeHandler = (e) => {
        alert("Deseja mesmo remover o carro?");
        const removeCarro = carros.filter( (car) => car.id != carro.id );
        setCarros( removeCarro )
    }

    return (
        <div className="car">
            <button onClick={ (e) => removeHandler(e) }>X</button>
            <label>{carro.marca}</label>
            <label>{carro.modelo}</label>
            <label>{carro.ano}</label>
            <label>{carro.cor}</label>
        </div>
    )
}

export default Carro;