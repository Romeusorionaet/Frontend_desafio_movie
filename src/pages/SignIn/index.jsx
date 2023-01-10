import {MailOutlined, LockOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom';
import {useAuth} from '../../hooks/auth';
import {useState} from 'react';

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {Container, Form, Background} from './style';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn(){
        if(!email, !password){
            alert("Campo vazio!")
        }else{
            signIn({email, password});
        }
    }

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
                    type="email"
                    icon={MailOutlined}
                    onChange={e=>setEmail(e.target.value)}
                />
                 <Input 
                    placeholder="Senha"
                    type="password"
                    maxLength="10"
                    icon={LockOutlined}
                    onChange={e=>setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    )
}