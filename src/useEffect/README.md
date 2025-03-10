# **React useEffect - Guia Prático**

## **📌 O que é o useEffect?**

-   Hook do React para executar efeitos colaterais em componentes funcionais.
-   Substitui os métodos de ciclo de vida (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).
-   Usado para buscar dados, atualizar o DOM e gerir assinaturas.

## **📌 Sintaxe Básica**

```javascript
import { useEffect } from 'react';

useEffect(() => {
    console.log('Efeito executado!');
});
```

-   Executa o efeito **sempre** que o componente renderiza.

## **📌 Executar Apenas uma Vez (Montagem do Componente)**

```javascript
useEffect(() => {
    console.log('Componente montado!');
}, []); // Array de dependências vazio
```

-   O efeito corre **apenas na montagem** do componente.

## **📌 Dependências no useEffect**

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
    console.log('O count mudou para', count);
}, [count]);
```

-   O efeito corre **somente quando `count` muda**.

## **📌 Limpeza de Efeito (Unmount)**

```javascript
useEffect(() => {
    const interval = setInterval(() => {
        console.log('Executando...');
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Componente desmontado!');
    };
}, []);
```

-   O `return` dentro do `useEffect` **limpa** o efeito ao desmontar o componente.

## **📌 Exemplo Prático: Buscar Dados de Países (RestCountries API)**

```javascript
import { useEffect, useState } from 'react';

const FetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Lista de Países</h2>
            <input
                type="text"
                placeholder="Procurar país"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredCountries.map((country, index) => (
                    <li key={index}>
                        {country.name.common} - {country.region}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchCountries;
```

## **📌 Exercício Prático**

1. Adicione um campo de pesquisa para filtrar os países por nome.
2. Mostre a bandeira do país junto com o nome e a região.
3. Ordene os países alfabeticamente.

## **📌 Conclusão**

-   `useEffect` gere efeitos colaterais em componentes funcionais.
-   Pode correr **sempre**, **uma vez** ou **quando dependências mudam**.
-   Deve-se **limpar efeitos** para evitar problemas de desempenho.

🚀 **Dúvidas? Vamos praticar!**
