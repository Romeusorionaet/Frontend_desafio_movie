import styled from 'styled-components';
import backgroundImg from '../../assets/sidePreview.png';

export const Container = styled.div`
    display: flex;
    align-items: stretch;

    height: 100vh;

    @media (max-width: 670px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    width: 340px;
    margin: 200px 135px;

    >div{
        text-align: center;
        width: 340px;

        h1{
            font-size: 48px;
            color: ${({theme})=>theme.COLORS.PINK_500};
        }

        p{
            font-size: 15px;
            color: ${({theme})=>theme.COLORS.GRAY_500};
        }
    }

    h2{
        margin: 48px 0;
        color: ${({theme})=>theme.COLORS.WHITE_500};
    }

    svg{
        color: ${({theme})=>theme.COLORS.GRAY_500};
        margin-left: 10px;
    }

    Button{
        margin: 24px 0 40px 0;
    }

    a{
        color: ${({theme})=>theme.COLORS.PINK_500}; 
        margin: 0 auto;
    }

    @media (max-width: 670px){
        margin: 200px 0;
    }
`;

export const Background= styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    @media (max-width: 670px){
        background: none;
    }
`;