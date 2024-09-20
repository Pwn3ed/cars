

const Carro = ({ carro }) => {
    return (
        <div className="car">
            <label>{carro.id}</label>
            <label>{carro.name}</label>
        </div>
    )
}

export default Carro;