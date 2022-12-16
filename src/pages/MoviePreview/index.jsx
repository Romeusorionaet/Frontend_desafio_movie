import {ArrowLeftOutlined, StarOutlined, StarFilled} from '@ant-design/icons';
import {RxStopwatch} from 'react-icons/rx';
import {Link} from 'react-router-dom';

import {Header} from '../../components/Header';

import {Container, Section} from './style';

export function MoviePreview() {
    return(
        <Container>
            <Header />
            <div className="ButtonTurnBack">
                <ArrowLeftOutlined />
                <Link to="/">
                    Voltar
                </Link>
            </div>
            <Section>
                <div className="wrapper_stars">
                    <h1>Interestellar</h1>
                    <div>
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarOutlined />
                    </div>
                </div>
                <div className="wrapper_span">
                    <div>
                        <img 
                            className="userImg"
                            src="https://github.com/romeusorionaet.png"
                            alt="Foto do usuário"
                        />
                        <span>Por Romeu Soares</span>
                    </div>
                    <div>
                        <RxStopwatch />
                        <span>23/05/22</span>
                        <span>às</span>
                        <span>08:00</span>
                    </div>

                </div>
                <div className="tags_spans">
                    <span>Ficção Cientifica</span>
                    <span>Drama</span>
                    <span>Família</span>
                </div>

                <div className="wrapper_text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda
                        ipsam, quod, facere et harum a culpa esse officia at voluptatibus inventore commodi recusandae? 
                        Fuga consequuntur non accusamus fugiat repellendus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda
                        ipsam, quod, facere et harum a culpa esse officia at voluptatibus inventore commodi recusandae? 
                        Fuga consequuntur non accusamus fugiat repellendus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda
                        ipsam, quod, facere et harum a culpa esse officia at voluptatibus inventore commodi recusandae? 
                        Fuga consequuntur non accusamus fugiat repellendus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda
                        ipsam, quod, facere et harum a culpa esse officia at voluptatibus inventore commodi recusandae? 
                        Fuga consequuntur non accusamus fugiat repellendus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda
                        ipsam, quod, facere et harum a culpa esse officia at voluptatibus inventore commodi recusandae? 
                        Fuga consequuntur non accusamus fugiat repellendus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda
                        ipsam, quod, facere et harum a culpa esse officia at voluptatibus inventore commodi recusandae? 
                        Fuga consequuntur non accusamus fugiat repellendus.
                    </p>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo 
                        obcaecati consequuntur modi soluta et quidem hic tenetur quae, velit 
                        praesentium, ducimus voluptatum nihil aperiam saepe itaque porro facere! 
                        Laudantium, itaque!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo 
                        obcaecati consequuntur modi soluta et quidem hic tenetur quae, velit 
                        praesentium.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo 
                        obcaecati consequuntur modi soluta et quidem hic tenetur quae, velit 
                        praesentium, ducimus voluptatum nihil aperiam saepe itaque porro facere! 
                        Laudantium, itaque!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo 
                        obcaecati consequuntur modi soluta et quidem hic tenetur quae, velit 
                        praesentium.
                    </p>
                </div>
            </Section>
        </Container>
    )
}