import {ArrowLeftOutlined} from '@ant-design/icons';
import {Link, useNavigate} from 'react-router-dom';

import {useState} from 'react';
import {api} from '../../services/api';

import {NoteItem} from '../../components/NoteItem';
import {TextArea} from '../../components/TextArea';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import {Container, Form, Buttons} from './style';

export function CreateMovie() {
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [season, setSeason] = useState("");
    const [episode, setEpisode] = useState("");

    const [isCheck, setIsCheck] = useState(true);

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState=>[...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState=>prevState.filter(tag=>tag !== deleted));
    }

    async function handleNewNote() {
        const checkbox = document.querySelector('#buttonSerie').checked

        if(checkbox){
            if(!episode || !season){
                return alert("Campo vázio.")
            }
        }

        if(newTag){
             return alert(`Você escreveu algo em tag ou link e não adicionou. Clique no botão + de adicionar!`)
        }

        if(rating >5 || rating <1){
            return alert("Invalid rating: A Nota máxima é 5 e a mínima 1.");
         }
 
         const verificTitleAndDescription = (!title, !description, !rating);
         const verificTags = (tags.length < 1);
 
         if(verificTitleAndDescription || verificTags){
             return alert("Campo vázio.")
         }else{
             await api.post("/notes", {
                 title,
                 description,
                 rating,
                 tags,
                 season,
                 episode
             });
             alert("Nota criada com sucesso!");
             navigate(-1);
         }
     }

    function handleReset() {
        return (
            setTags([]),
            setNewTag(""),
            Array.from(document.querySelectorAll('.reset')).forEach(
            reset => (reset.value = "")
        ));
    };
    
    function actionCheck() {
        const check = document.querySelector('#buttonMovie').checked
        return setIsCheck(check)
    }

    return(
        <Container>
            <Header />
            
            <Buttons >
                <label>
                    <input type="radio" name="optionRadio" onClick={actionCheck} id="buttonMovie" defaultChecked />
                    Filme
                </label>

                <label>
                    <input type="radio" name="optionRadio" onClick={actionCheck} id="buttonSerie" />
                    Serie
                </label>
            </Buttons>

            <Form>
                <div className="ButtonTurnBack">
                    <ArrowLeftOutlined />
                    <Link to="/">
                        Voltar
                    </Link>
                </div>
                <div>
                    <Input 
                    className='reset'
                    maxLength='50'
                    onChange={e=>setTitle(e.target.value)}
                    placeholder="Título" 
                    />

                    <Input 
                    className='reset'
                    type="Number"
                    min="1" max="5"
                    onChange={e=>setRating(e.target.value)}
                    placeholder="Sua nota (de 1 a 5)" 
                    />
                </div>

                {   
                    isCheck  ?
                    null
                    :
                    <div className='wrapperSeries'>
                        <div>
                            <Input 
                            className='reset'
                            maxLength='50'
                            onChange={e=>setSeason(e.target.value)}
                            placeholder="Temporada" 
                            />  
                        </div>
                        <div>
                            <Input 
                            className='reset'
                            maxLength='28'
                            onChange={e=>setEpisode(e.target.value)}
                            placeholder="Episódio" 
                            /> 
                        </div>
                    </div>
                }

                <TextArea 
                className='reset'
                onChange={e=>setDescription(e.target.value)}
                placeholder="Observações" 
                />
            </Form>

            <Section title="Marcadores">
                <div className="Tags">
                    <NoteItem 
                    isNew
                    value={newTag}
                    placeholder="novo marcador"
                    maxLength='18'
                    onChange={e=>setNewTag(e.target.value)}
                    onClick={handleAddTag}
                    />

                    {
                        tags.map((tag, index)=>(
                            <NoteItem 
                            key={String(index)}
                            value={tag}
                            onClick={()=>handleRemoveTag(tag)}
                            />
                        ))
                    }  
                </div>
            </Section>

            <div className="ButtonsDelAndSave">
                <Button title="Limpar nota" onClick={handleReset} />
                <Button title="Salvar alterações" onClick={handleNewNote} />
            </div>
        </Container>
    )
}