import {useState} from 'react';
import {MailOutlined, LockOutlined, ArrowLeftOutlined, UserOutlined} from '@ant-design/icons'
import {Link, useNavigate} from 'react-router-dom';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {api} from '../../services/api';

import {Container, Form, Background} from './style';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        if(email.includes('@gmail.com') === false){
            return alert(`"${email}" não é um email válido!`)
        }else if(password.length < 6){
            return alert("A senha deve ter no mínimo 6 caracteres.")
        }

        api.post("/users", {name, email, password})
        .then(()=>{
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error=>{
            if(error.res){
                alert(error.res.data.message);
            }else{
                alert("Não foi possível cadastratar");
            }
        });
    }

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
                    onChange={e=>setName(e.target.value)}
                />
                <Input 
                    placeholder="E-mail"
                    type="text"
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
                <Button title="Cadastrar" onClick={handleSignUp} />
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