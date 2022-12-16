import styled from 'styled-components';
import backgroundImg from '../../assets/sidePreview.png';

export const Container = styled.div`
    display: flex;
    height: 100vh;
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
        min-height: 56px;
        margin: 24px 0 30px 0;
    }

    a{
        color: ${({theme})=>theme.COLORS.PINK_500}; 
        margin: 0 10px;
    }
`;

export const Background= styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;