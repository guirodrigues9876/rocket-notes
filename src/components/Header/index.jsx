import { Container, Profile } from './styles';

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="http://github.com/guirodrigues9876.png"
                alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Guilherme Rodrigues</strong>
                </div>
            </Profile>
            
        </Container>
    )
}