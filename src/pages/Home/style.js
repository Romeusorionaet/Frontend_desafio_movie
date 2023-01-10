import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    overflow: auto;
    width: 100%;
    height: 100vh;

    position: relative;

    display: grid;

    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content"
    "footer";

    >.wrapper_input{
        width: 60%;
        margin: 30px auto;
        z-index: 1;
    }

    >main{
        grid-area: content;

        background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};

        .containerNotes{
            margin-top: 50px;
            display: flex;
            flex-direction: column;

            .title{
                

                text-align: start;
                font-style: italic;
                font-size: 26px;
            }

            .wrapperMovies, .wrapperSeries{
                height: 300px;
                overflow: auto;
                opacity: .8;

                border-bottom: 1px solid ${({theme})=>theme.COLORS.PINK_500};
            }

            .wrapperMovies:hover, .wrapperSeries:hover{
                opacity: 1;
            }

            div{
                width: 100%;
            }
        }
    }
    
    .social{
        height: 100px;
        background: red;
    }

    @media (max-width: 1350px){
        >.wrapper_input{
        width: 48%;
    }
    }

    @media (max-width: 950px){
        >.wrapper_input{
        width: 30%;
    }
    }

    @media (max-width: 670px){
        >.wrapper_input{
        position: absolute;
        margin: 40px 0 0 20px;
        width: 50%;
    }
    }
`;

export const Content = styled.div`
    max-width: 100%;
    margin: 40px 120px;
    grid-area: content;

    >.wrapperHeaderNotes{
        display: flex;
        justify-content: space-between;
        align-items: center;

        >.FiPlus{
            position: absolute;
            
            top: 185px;
            right: 290px;
            
            width: 30px;
            height: 30px;

            color: ${({theme})=>theme.COLORS.GRAY_100};
        }
    }

    >.containerNotes{
        display: flex;
        justify-content: space-evenly;
       
        
    }

    @media (max-width: 670px){
        margin: 50px 10px;
    }
`;

export const NewMovie = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 207px;
    height: 48px;

    border-radius: 8px;

    color: ${({theme})=>theme.COLORS.GRAY_100};
    background-color: ${({theme})=>theme.COLORS.PINK_500};

    @media (max-width: 670px){
        width: auto;
        padding: 5px;
    }
`;

export const Section = styled.section`
    width: 90%;
    height: 56%;
    margin: -300px auto;

    display: flex;
    justify-content: center;

    >div{
        opacity: .6;
        border-radius: 10px;
        padding: 20px;
        height: auto;
        h2{
            margin-bottom: 20px;
        }
        ul{
            margin-left: 20px;
        }
    }
`;