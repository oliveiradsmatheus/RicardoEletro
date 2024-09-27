import CarrinhoProdutos from "./componentes/CarrinhoProdutos";
import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

function App() {

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
            setExibirCarrinho={setExibirCarrinho} /> :
          <GradeProdutos
            listaCarrinho={listaCarrinho}
            setListaCarrinho={setListaCarrinho}
            listaProdutos={produtos} />
      }
    </div>
  );
}

export default App;

// Excluindo um repositório remoto: git remote rm origin
// Apontando para um novo repositório: git remote add origin "nova URL"
// Enviando os documentos para um repositório: git push --mirror "URL de origem"
// 1°) Instalar o gh-pages no projeto: npm install gh-pages
// 2°) Em package.json adicione a seguinte linha no nível raiz: “homepage”: http://{nome do usuário}.github.io/{nome do repositório} <- exclua as chaves
// 3°) Ainda no arquivo package.json, na seção ‘scripts’ adicione as seguintes linhas: "predeploy" : "npm run build", "deploy" : "gh-pages -d build",
//4°) Faça o commit das mudanças e execute o seguinte comando no terminal: npm run deploy
//5°) Faça os testes da aplicação na Internet, acessando-a no endereço informado em “homepage” (2° passo).