import {ArrowLeftOutlined} from '@ant-design/icons';
import {RxStopwatch} from 'react-icons/rx';
import {FaTrash} from 'react-icons/fa'

import {useState, useEffect} from 'react';
import {api} from '../../services/api';
import {useParams, useNavigate} from 'react-router-dom';

import {Header} from '../../components/Header';
import {Stars} from "../../components/Stars";
import {Tags} from "../../components/Tags";
import {useAuth} from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.png';

import {Container, Section, Trash} from './style';

function formattingDateAndTime(datetime) {
    
    const [date, time] = datetime.split(" ")
    const [yyyy, mm, dd] = date.split("-")
    const dateFormatted = `${dd}/${mm}/${yyyy}`
    const [hour, minutes] = time.split(":")
    const newHour = hour - 3
    const hourFormatted = `${newHour}:${minutes}`
    
    return {dateFormatted, hourFormatted}
  }

export function MoviePreview() {
    const [data, setData] = useState(null);
    
    const {user} = useAuth(); 
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const params = useParams();
    const navigate = useNavigate();

    function handleBack(){
      navigate(-1);
    }

    async function handleRemove(){
      const confirm = window.confirm("Deseja realmente remover a nota?");
  
      if(confirm){
        await api.delete(`/notes/${params.id}`);
        handleBack();
      }
    }
    
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/notes/${params.id}`);
        setData(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert(
            "Não foi possível carregar esta nota."
          );
          navigate(-1);
          console.log(error);
        }
      }
    }
    fetchData();
  }, []);

    return(
        <Container>
            <Header />
            
            <div className='wrapper'>
              <div className="ButtonTurnBack">
                  <ArrowLeftOutlined />
                  <a onClick={handleBack}>
                      Voltar
                  </a>
              </div>
              <Trash onClick={handleRemove}>
                <FaTrash />
              </Trash>
            </div>
            
            {data &&
              <Section>
                <div className="wrapper_stars">
                  <h1>{data.title}</h1>
            
                    <div>
                        <Stars rating={data.rating} />
                    </div>
                </div>
                <div className="wrapper_span">
                    <div>
                        <img 
                            className="userImg"
                            src={avatarUrl}
                            alt="Foto do usuário"
                        />
                        <span>Por {user.name}</span>
                    </div>
                    <div>
                        <RxStopwatch />
                        <span>{formattingDateAndTime(data.created_at).dateFormatted}</span>
                        <span>às</span>
                        <span>{formattingDateAndTime(data.created_at).hourFormatted}</span>
                    </div>
                </div>
                <div className="tags_spans">
                  {data.tags.map(tag=>(
                    <Tags 
                    key={String(tag.id)} 
                    title={tag.name} 
                    />
                  ))}
                </div>
                
                {data.season &&
                  <div className='wrapperSerie'>
                  <span>Temporada:</span>
                  {data.season}
                  <span>Episódio:</span>
                  {data.episode}
                  </div>
                }

                <div className="wrapper_text">
                    <p>{data.description}</p>
                </div>
            </Section>}
        </Container>
    )
}