import {MailOutlined, LockOutlined, ArrowLeftOutlined, UserOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom';

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {Container, Form, Background} from './style';

export function SignUp() {
    return(
        <Container>
            <Form>
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </div>
                <h2>Crie sua conta</h2>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={UserOutlined}
                />
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
                <Button title="Cadastrar" />
                <div>
                    <ArrowLeftOutlined />
                    <Link to="/">
                        Voltar para o login
                    </Link>  
                </div>
            </Form>
            <Background />
        </Container>
    )
}