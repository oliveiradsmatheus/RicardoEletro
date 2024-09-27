import CarrinhoProdutos from "./CarrinhoProdutos.jsx";
import GradeProdutos from "./GradeProdutos.jsx";
import Cabecalho from "../templates/Cabecalho.jsx"
import BarraBusca from "../templates/BarraBusca.jsx"
import { useEffect, useState } from "react";

export default function Pagina(props) {
    const [produtos, setProdutos] = useState([]);
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [exibirCarrinho, setExibirCarrinho] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((resposta) => resposta.json())
            .then((produtos) => {
                setProdutos(produtos);
            });
    }, []);

    useEffect(() => {
        if (listaCarrinho.length > 0) {
            localStorage.setItem('carrinho', JSON.stringify(listaCarrinho));
        }
    }, [listaCarrinho])

    useEffect(() => {
        const carrinhoLocalStorage = localStorage.getItem('carrinho');
        if (carrinhoLocalStorage) {
            const carrinhoSalvo = JSON.parse(carrinhoLocalStorage);
            setListaCarrinho(carrinhoSalvo);
        }
    }, []);

    return (
        <div className="App">

            <Cabecalho />
            <BarraBusca
                listaCarrinho={listaCarrinho}
                setExibirCarrinho={setExibirCarrinho} />
            {
                exibirCarrinho ?
                    <CarrinhoProdutos
                        listaCarrinho={listaCarrinho}
                        setListaCarrinho={setListaCarrinho}
                        setExibirCarrinho={setExibirCarrinho} />
                    :
                    <GradeProdutos
                        listaCarrinho={listaCarrinho}
                        setListaCarrinho={setListaCarrinho}
                        listaProdutos={produtos} />

            }
        </div>
    );
}