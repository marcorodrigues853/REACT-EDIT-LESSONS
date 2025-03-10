import './App.css';
import NikeCard from './NikeCard';
import CountriesList from './aula-3/CountryList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <CountriesList />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li>
                        <Link to="/user/123">Perfil Usuário</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<CountriesList />} />
                <Route path="/about" element={<NikeCard />} />
                <Route path="/contact" element={<CountriesList />} />
                <Route path="/user/:id" element={<CountriesList />} />
                <Route path="/dashboard" element={<CountriesList />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
