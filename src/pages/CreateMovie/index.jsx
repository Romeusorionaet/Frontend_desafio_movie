import {ArrowLeftOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {NoteItem} from '../../components/NoteItem';
import {TextArea} from '../../components/TextArea';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import {Container, Form} from './style';

export function CreateMovie() {
    return(
        <Container>
            <Header />
            
            <Form>
                <div className="ButtonTurnBack">
                    <ArrowLeftOutlined />
                    <Link to="/">
                        Voltar
                    </Link>
                </div>
                <h1>Novo filme</h1>
                <div>
                    <Input placeholder="Título" />
                    <Input placeholder="Sua nota (de 0 a 5)" />
                </div>
                <TextArea placeholder="Observações" />
            </Form>

            <Section title="Marcadores">
                <div className="Tags">
                    <NoteItem isNew placeholder="Novo marcador" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                </div>
            </Section>

            <div className="ButtonsDelAndSave">
                <Button title="Excluir filme" />
                <Button title="Salvar alterações" />
            </div>
        </Container>
    )
}