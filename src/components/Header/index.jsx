import {Link} from 'react-router-dom';

import {Input} from '../Input';

import {Container, Profile} from './style';

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>
            <div className="wrapper_input">
                <Input placeholder="Pesquisar pelo título" />
            </div>
    
            <Profile>
                <div>
                    <h2>Romeu Soares</h2>
                    <a href="#">Sair</a>
                </div>
                <Link to="/profile">
                    <img 
                        src="https://github.com/romeusorionaet.png"
                        alt="Foto do usuário"
                    />
                </Link>
            </Profile>
        </Container>
    )
}