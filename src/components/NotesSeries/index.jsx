import {Link} from 'react-router-dom';
import {Tags} from '../Tags';
import {Stars} from "../Stars";

import {Container} from './style';

export function NotesSeries({data, ...rest}) {
    return(
        <Container { ...rest}>
            <Link to={`/MoviePreview/${data.id}`}>
                
                <h2>{data.title}</h2>
                <div className="stars-wrapper">
                    <Stars rating={data.rating} />
                </div>

                <p>
                    {data.description} 
                </p>
                
                {(data.season || data.episode) &&
                    <div className='wrapperSerie'>
                        <label>Temporada: {data.season}</label>
                        <label>Serie: {data.episode}</label>
                    </div>
                }

                {
                    data.noteTags &&
                <div className="tags">
                    { 
                        data.noteTags.map(tag=>(
                            <Tags key={String(tag.id)} title={tag.name} />
                        ))
                    }
                </div>
                }
            </Link> 
        </Container>
    )
}