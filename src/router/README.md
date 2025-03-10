# **React Router - Guia Prático**

## **📌 O que é o React Router?**

-   Biblioteca para gerenciamento de rotas em aplicações React.
-   Permite criar Single Page Applications (SPAs) com múltiplas páginas.
-   Navegação sem recarregar a página.

## **📌 Instalação**

Para instalar o React Router, use o seguinte comando:

```bash
npm install react-router-dom
```

## **📌 Estrutura Básica**

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};
```

## **📌 Navegação com `<Link>`**

```javascript
import { Link } from 'react-router-dom';

<nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">Sobre</Link>
        </li>
    </ul>
</nav>;
```

## **📌 Rotas Dinâmicas e Parâmetros**

```javascript
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { id } = useParams();
    return <h2>Perfil do Usuário: {id}</h2>;
};

<Route path="/user/:id" element={<UserProfile />} />;
```

## **📌 Navegação Programática**

```javascript
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    return <button onClick={() => navigate('/')}>Voltar para Home</button>;
};
```

## **📌 Página 404 (Not Found)**

```javascript
const NotFound = () => <h2>Erro 404 - Página Não Encontrada</h2>;

<Route path="*" element={<NotFound />} />;
```

## **📌 Exercício Prático**

1. Crie uma nova página chamada `Contato`.
2. Adicione um link no menu para esta página.
3. Teste a navegação no navegador.

## **📌 Conclusão**

-   React Router facilita a criação de SPAs.
-   Uso de `<Routes>` e `<Route>` para definir caminhos.
-   `<Link>` permite navegação sem recarregar a página.
-   Possibilidade de rotas dinâmicas e navegação programática.
