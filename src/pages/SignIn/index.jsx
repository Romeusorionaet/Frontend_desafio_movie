import {MailOutlined, LockOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom';

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {Container, Form, Background} from './style';

export function SignIn() {
    return(
        <Container>
            <Form>
            <div>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
            </div>
                <h2>Faça seu login</h2>
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={MailOutlined}
                />
                 <Input 
                    placeholder="Senha"
                    type="password"
                    icon={LockOutlined}
                />
                <Button title="Entrar" />

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    )
}