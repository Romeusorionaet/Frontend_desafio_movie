import {StarOutlined, StarFilled } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Container} from './style';

export function InterMovie() {
    return(
        <Container>
            <Link to="/moviePreview">
                <h2>Interestellar</h2>
                <div className="stars">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                </div>
                <p>
                    Pragas nas colheitas fizeram a civilização humana 
                    regredir para uma sociedade agrária em futuro de data 
                    desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda 
                    com sua família. Murphy, a filha de dez anos de Cooper, 
                    acredita que seu quarto está assombrado por um fantasma 
                    que tenta se comunicar com ela. Pai e filha descobrem que 
                    o "fantasma" é uma inteligência desconhecida que está 
                    enviando mensagens codificadas através de radiação 
                    gravitacional, deixando coordenadas em binário que os 
                    levam até uma instalação secreta da NASA liderada pelo 
                    professor John Brand. O cientista revela que um buraco de 
                    minhoca foi aberto perto de Saturno e que ele leva a planetas 
                    que podem oferecer condições de sobrevivência para a espécie humana. 
                </p>

                <div className="spans">
                    <span>Ficção Cientifica</span>
                    <span>Drama</span>
                    <span>Família</span>
                </div>
            </Link>
        </Container>
    )
}