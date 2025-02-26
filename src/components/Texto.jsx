function Texto({ nome = 'escrever nome', indice }) {
    return (
        <div>
            <h3>
                {nome} {indice}
            </h3>
        </div>
    );
}

export default Texto;
