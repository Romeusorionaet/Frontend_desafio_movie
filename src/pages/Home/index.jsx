import {FiPlus} from 'react-icons/fi';
import {api} from '../../services/api';
import {useState, useEffect} from 'react';
import {GithubFilled, InstagramFilled, LinkedinFilled} from '@ant-design/icons';

import {Container, Content, NewMovie, Section} from './style';

import {Header} from '../../components/Header';
import {NotesMovies} from '../../components/NotesMovies';
import {NotesSeries} from '../../components/NotesSeries';
import {Input} from '../../components/Input';

export function Home() {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);
  
      useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }
        fetchNotes();
      },[search]);

    return(
        <Container>
            <Header />

            <div className="wrapper_input">
                <Input 
                placeholder="Pesquisar pelo título" 
                onChange={e => setSearch(e.target.value)}
                />
            </div>
            
            <main>
                <Content>
                    <div className="wrapperHeaderNotes">
                        <h2>Minhas anotações</h2>
                        <NewMovie to="/createMovie">
                            <FiPlus />
                            Adicionar nota
                        </NewMovie>
                    </div>
                    
                    {notes.length > 0 ? 
                    <div className='containerNotes' > 
                        {
                        
                        notes ?
                        <div className='title'>
                            <span>Filmes:</span>
                        </div>
                        :
                        null
                        
                        }
                           
                        <div className='wrapperMovies'> 
                            { 
                            notes.map(note=>(
                                note.season ?
                                null
                                :
                                <NotesMovies 
                                key={String(note.id)}
                                data={note}
                                />
                            ))
                            }
                        </div>

                        {
                        
                        notes ?
                        <div className='title'>
                            <span>Series:</span>
                        </div>
                        :
                        null
                     
                        }
                        
                        <div className='wrapperSeries'>
                            { 
                            notes.map(note=>(
                                note.season ?
                                <NotesSeries 
                                key={String(note.id)}
                                data={note}
                                />
                                :
                                null
                            ))
                            }
                        </div>
                    </div>
                    :
                    null
                    }
                </Content>      
            </main>
            <Section>
                {
                notes.length >= 1 ? <div>{null}</div> : 
                <div>
                    <h2>
                        Click no botão "Adicionar nota" crie uma nota sobre filme ou serie
                    </h2>
                    <ul>
                        <li>Deixe sua observação sobre o que você assistiu compartilhando sua experiência.</li>
                        <li>Adicione ao título o nome do filme ou serie.</li>
                        <li>Deixe sua avaliação na nota entre 1 a 5.</li>
                        <li>Adicione tags a sua nota.</li>
                    </ul>
                </div>
                }
            </Section>
        </Container>
    )
}