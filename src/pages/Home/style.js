import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;

    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    >main{
        overflow-y: auto;
        grid-area: content;

        background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    }
`;

export const Content = styled.div`
    max-width: 100%;
    margin: 50px 120px;

    >.wrapper{
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