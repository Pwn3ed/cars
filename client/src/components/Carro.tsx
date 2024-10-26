
type Carro = {
    id: string,
    bodyType: string,
    modelName: string,
    modelType: string
    imageUrl: string,
    venda?: {
        nome: string,
        cpf: string
    }
};

type CarroProps = {
    carro: Carro,
    carros: Carro[],
    setCarros: React.Dispatch<React.SetStateAction<Carro[]>>,
    showVenda?: boolean,
    showVendaButton?: boolean
}

const Carro = ({ carro, carros, setCarros, showVenda, showVendaButton }:CarroProps) => {

    const handleRemove = () => {
        confirm("Deseja mesmo remover o carro?") 
        &&
        setCarros(carros.filter( car => car.id != carro.id ))
    }

    const handleSell = () => {

        let nome = prompt("Digite seu nome");
        let cpf = prompt("Digite seu cpf");

        if (nome && cpf) {
            carro.venda = {
                cpf: cpf,
                nome: nome
            }
            setCarros( carros.map( (car) => car ) )
            
            alert("Carro vendido.")
            return;
        }
        alert("Campos invalidos, tente novamente.")
    }

    return (
        <div className="car">
            <label>{carro.modelName}</label>
            <label>{carro.bodyType}</label>
            <label>{carro.modelType}</label>
            <img src={carro.imageUrl} width={'300px'} />

            <div className="buttons">


                <button className="remove" onClick={handleRemove}>X</button>
                {showVenda && (
                    <div className="showVenda">

                        <label>Vendido para: </label>
                        <label>{carro.venda?.nome}</label>
                        <label>{carro.venda?.cpf}</label>
                    </div>
                )}
                {showVendaButton && (
                    <button className="showVendaButton" onClick={handleSell}>Vender</button>
                )

                }

            </div>
        </div>
    )
}

export default Carro;