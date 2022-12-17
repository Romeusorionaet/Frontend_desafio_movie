import {
    ArrowLeftOutlined, 
    UserOutlined, 
    MailOutlined, 
    LockOutlined, 
    CameraOutlined,
    InstagramFilled,
    GithubFilled
} from '@ant-design/icons';

import {Link} from 'react-router-dom';

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {Container, Form, Avatar} from './style';

export function Profile() {
    return(
        <Container>
            <div className="ButtonTurnBack">
                <ArrowLeftOutlined />
                <Link to="/">
                    Voltar
                </Link>
            </div>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/romeusorionaet.png"
                        alt="Foto do usuário"
                    />
                    <label htmlFor="avatar">
                        <CameraOutlined />
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

                <div className="wrapper_input">
                    <Input 
                        type="text"
                        icon={UserOutlined}
                        placeholder="Nome" 
                    />
                    <Input 
                        type="text"
                        icon={MailOutlined}
                        placeholder="E-mail" 
                        />
                    <Input 
                        type="password"
                        icon={LockOutlined}
                        placeholder="Senha atual" 
                    />
                    <Input 
                        type="password"
                        icon={LockOutlined}
                        placeholder="Nova senha" 
                    />
                </div>

                <Button  title="Enviar" />

                <div className="social">
                    <a target="_blank" href="https://github.com/Romeusorionaet">
                        <GithubFilled />
                    </a>
                </div>
            </Form>
        </Container>
    )
}