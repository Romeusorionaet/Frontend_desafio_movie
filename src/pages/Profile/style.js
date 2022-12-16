import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({theme})=>theme.COLORS.PINK_100};
    height: 145px;

     .ButtonTurnBack{
         display: flex;
         align-items: center;
         gap: 10px;

        padding-top: 65px;
        margin-left: 120px;

        svg, a{
            color: ${({theme})=>theme.COLORS.PINK_500};
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;

    width: 340px;
    margin: -30px auto;

    .wrapper_input{
        width: 100%;
    }

    .wrapper_input>:nth-child(3){
        margin-top: 30px;
    }

    .wrapper_input svg{
        color: ${({theme})=>theme.COLORS.GRAY_500};
        margin-left: 10px;
    }

    >Button{
        width: 100%;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto;

    >img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    >label{
        position: absolute;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 48px;
        height: 48px;

        background-color: ${({theme})=>theme.COLORS.PINK_500};
        border-radius: 50%;

        bottom: 7px;
        right: 7px;

        input{
            display: none;
        }

        svg{
            width: 20px;
            height: 20px;
            
            color: ${({theme})=>theme.COLORS.BACKGROUND_500};
        }
    }
`;