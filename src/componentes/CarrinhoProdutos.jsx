import { Table } from "react-bootstrap";

export default function CarrinhoProdutos(props) {
    function excluirProduto(produto) {
        const novaLista = props.listaCarrinho.filter((item) => {
            return item.id !== produto.id;
        });
        props.setListaCarrinho(novaLista);
        localStorage.setItem('carrinho', JSON.stringify(novaLista));
    }

    function alterarQuantidade(produto, quantidade) {
        produto.qtde += quantidade;
        if (produto.qtde < 0)
            produto.qtde = 0;
        props.setListaCarrinho(props.listaCarrinho.map((item) => {
            return item.id === produto.id ? produto : item;
        }));
    }

    return (
        <div className="text-center">
            <div className="text-center">
                <h2>Itens do Carrinho</h2>
                <button className="text-center" onClick={() => {
                    props.setExibirCarrinho(false);
                }} type='button'
                    style={{
                        height: '40px',
                        width: '80px',
                        color: 'white',
                        backgroundColor: 'rgb(255,60,60)',
                        border: '0px',
                        borderRadius: '10px',
                    }}
                >Voltar</button>
            </div>
            <div>
                <Table striped>
                    <thead>
                        <th>Produto</th>
                        <th>Foto</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th>Opções</th>
                    </thead>
                    <tbody>
                        {
                            props.listaCarrinho.map((item) => {
                                return (
                                    <tr>
                                        <td style={{ width: "10%" }}><img style={{ width: "60px", height: "70px" }} src={item.image} /></td>
                                        <td className="text-bold">{item.title}</td>
                                        <td>R$ {item.price.toFixed(2)}</td>
                                        <td style={{ width: "10%" }} className="text-center">
                                            {item.qtde}
                                            {
                                                /*<input // Não consegui alterar quantidade aqui
                                                name="qtde"
                                                style={{
                                                    width: '40px',
                                                    border: '0px',
                                                    outline: 'none',
                                                }}
                                                type="number"
                                                value={item.qtde}
                                                step={1}
                                                min={0}
                                                 />*/
                                                <div>
                                                    <button style={{
                                                        height: '30px',
                                                        width: '40px',
                                                        color: 'white',
                                                        backgroundColor: 'rgb(255,60,60)',
                                                        border: '0px',
                                                        borderRadius: '10px',
                                                    }} onClick={() => {
                                                        alterarQuantidade(item, -1)
                                                    }}>-</button>
                                                    <button style={{
                                                        height: '30px',
                                                        width: '40px',
                                                        color: 'white',
                                                        backgroundColor: 'rgb(255,60,60)',
                                                        border: '0px',
                                                        borderRadius: '10px',
                                                    }} onClick={() => {
                                                        alterarQuantidade(item, 1)
                                                    }}>+</button>
                                                </div>
                                            }
                                        </td>
                                        <td style={{ width: "10%" }}>R$ {(item.qtde * item.price).toFixed(2)}</td>
                                        <td style={{ width: "10%" }}>
                                            <button className="text-center" onClick={() => {
                                                excluirProduto(item);
                                            }} type='button'
                                                style={{
                                                    height: '40px',
                                                    width: '80px',
                                                    color: 'white',
                                                    backgroundColor: 'rgb(255,60,60)',
                                                    border: '0px',
                                                    borderRadius: '10px',
                                                }}
                                            >Excluir</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}