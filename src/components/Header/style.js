import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;

    grid-area: header;

    width: 100%;
    height: 116px;

    display: flex;
    gap: 64px;
    align-items: center;

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=>theme.COLORS.BACKGROUND_LINE};

    .wrapper_input{
        width: 100%;
    }

    >h1{
        font-size: clamp(20px, 26px, 4vw);
        margin: 0 0 10px 6vw;
        
        color: ${({theme})=>theme.COLORS.PINK_500};
    }

    @media (max-width: 670px){
        position: relative;
        flex-direction: column;
        gap: 40px;

        .wrapper_input{
            width: 50%;
            margin: -30px 200px 0 0;
        }
    }
`;

export const Profile = styled.div`
    width: 200px;
    height: 68px;

    color: ${({theme})=>theme.COLORS.GRAY_500};

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 8vw;
    margin-left: 20px;

    >div{
        min-width: 100%;

        h2{
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: ${({theme})=>theme.COLORS.WHITE_500};
        }
        a{
            margin-left: 55%;
            color: ${({theme})=>theme.COLORS.GRAY_500};
        }
    }
    >a img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    @media (max-width: 670px){
        position: absolute;
        top: 45px;
        right: 1vh;

        >div a{
            margin-left: 80%;
        }
        >div h2{
            margin-left: 48%;
        }
    }
`;