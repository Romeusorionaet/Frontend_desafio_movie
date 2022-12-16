import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    >Section{
        margin-top: 30px;
        >.Tags{
            display: flex;
            gap: 15px;
            align-items: center;

            margin-top: 25px;
            padding-left: 16px;

            background-color: ${({theme})=>theme.COLORS.BLACK};
            border-radius: 8px;
            height: 85px;
        }
    }

    >.ButtonsDelAndSave{
        display: flex;
        justify-content: space-around;
        margin: 40px 120px;

        Button{
            width: 530px;
        }

        Button:nth-child(1){
            background-color: ${({theme})=>theme.COLORS.BLACK};
            color: ${({theme})=>theme.COLORS.PINK_500};
        }
    }
`;

export const Form = styled.form`
    width: 100%;

    display: flex;
    gap: 30px;
    flex-direction: column;
    padding: 150px 120px 0 120px;

    >h1{
        color: ${({theme})=>theme.COLORS.WHITE_500};
    }

    >.ButtonTurnBack{
        display: flex;
        gap: 5px;
        align-items: center;

        svg, a{
            color: ${({theme})=>theme.COLORS.PINK_500};
        }
    }

    >div{
        display: flex;
        gap: 40px;
    }
    >TextArea, Input{
        border-radius: 10px;
    }
`;