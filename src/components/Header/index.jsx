import {Link, useNavigate} from 'react-router-dom';
import {api} from '../../services/api';
import {useAuth} from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.png';

import {Container, Profile} from './style';

export function Header() {
    const {signOut, user} = useAuth();
 
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate()

    function handleLogOut() {
        navigate('/');
        signOut();
    }
    
    return(
        <Container>
            <h1>RocketMovie</h1>
            <Profile>
                <div>
                    <h2>{user.name}</h2>
                    <a onClick={handleLogOut}>Sair</a>
                </div>
                <Link to="/profile">
                    <img 
                        src={avatarUrl}
                        alt="Foto do usuário"
                    />
                </Link>
            </Profile>
        </Container>
    )
}