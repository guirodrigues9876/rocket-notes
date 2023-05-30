import { Container, Links, Content } from './styles';

import { Header }  from '../../components/Header';
import { Button }  from '../../components/Button';
import { ButtonText }  from '../../components/ButtonText';
import { Section }  from '../../components/Section';
import { Tag }  from '../../components/Tag';

export function Details(){
  return (
    <Container>
      <Header />

      <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>
              Introdução ao React
            </h1>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab molestiae amet possimus 
              expedita hic! Aut deleniti vero quasi non iure omnis illo, maiores adipisci illum possimus 
              aspernatur repellendus id a.
              Animi ut a exercitationem, sapiente, quas in, architecto cupiditate harum fuga deserunt magnam
              quod deleniti vero at rerum. Adipisci ab exercitationem explicabo officia quo voluptas voluptates
              delectus repudiandae sit eius?
            </p>
        <Section title="Links úteis">
          <Links>
            <li>
              <a href="https://app.rocketseat.com.br/">Rocketseat</a>
            </li>         
            <li>
              <a href="https://app.rocketseat.com.br/" />
            </li>         
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="express" />
          <Tag title="Node" />
        </Section>

        <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}