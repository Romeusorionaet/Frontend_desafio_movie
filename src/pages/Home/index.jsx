import {FiPlus} from 'react-icons/fi';

import {Container, Content, NewMovie} from './style';

import {Header} from '../../components/Header';
import {InterMovie} from '../../components/InterMovie';

export function Home() {
    return(
        <Container>
            <Header />
            
            <main>
                <Content>
                    <div className="wrapper">
                        <h2>Meus filmes</h2>
                        <NewMovie to="/createMovie">
                            <FiPlus />
                            Adicionar filme
                        </NewMovie>
                    </div>
                  <InterMovie />
                  <InterMovie />
                  <InterMovie />
                </Content>
            </main>
        </Container>
    )
}