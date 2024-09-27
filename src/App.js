import TelaMenu from "./componentes/TelaMenu.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<TelaMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// npm install react-router-dom
// Excluindo um repositório remoto: git remote rm origin
// Apontando para um novo repositório: git remote add origin "nova URL"
// Enviando os documentos para um repositório: git push --mirror "URL de origem"
// 1°) Instalar o gh-pages no projeto: npm install gh-pages
// 2°) Em package.json adicione a seguinte linha no nível raiz: “homepage”: http://{nome do usuário}.github.io/{nome do repositório} <- exclua as chaves
// 3°) Ainda no arquivo package.json, na seção ‘scripts’ adicione as seguintes linhas: "predeploy" : "npm run build", "deploy" : "gh-pages -d build",
//4°) Faça o commit das mudanças e execute o seguinte comando no terminal: npm run deploy
//5°) Faça os testes da aplicação na Internet, acessando-a no endereço informado em “homepage” (2° passo).