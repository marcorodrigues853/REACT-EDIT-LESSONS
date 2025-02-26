import Foto from './Foto';
import Texto from './Texto';
import imagem from './../../public/Adriana.jpg';
import CountryList from '../aula-3/CountryList';

function Container() {
    // const nomes = ['Tania', 'Adriana', 'Alexandra', 'Marco'];

    const pessoa = {
        nome: 'Tania',
        age: 20,
        imagemUrl: imagem,
    };

    return (
        <div style={{ width: '100vw', padding: '2rem' }}>
            <Foto fotoUrl={pessoa.imagemUrl} />
            <Texto nome={pessoa.nome} />
            <Texto nome={pessoa.age} />

            <CountryList moeda={'usd'} />
        </div>
    );
    // return (
    //     <>
    //         {nomes.map((nome, index) => {
    //             return <Texto nome={nome} indice={index} key={index} />;
    //         })}

    //         <Foto />
    //     </>
    // );
}

export default Container;
