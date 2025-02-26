import imagem from './../../public/image_REACT.jpg';

function Foto({ fotoUrl }) {
    return (
        <div>
            <img
                src={fotoUrl ? fotoUrl : imagem}
                alt="imagem do alt"
                width="200px"
                height="200px"
            />
        </div>
    );
}

export default Foto;
