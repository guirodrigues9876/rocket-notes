import { Container } from './styles';

export function ButtonText({ title, ...rest }){
    return  (
        <Container 
            type="Button"
            {...rest}
        >
            {title}
        </Container>
    );
}