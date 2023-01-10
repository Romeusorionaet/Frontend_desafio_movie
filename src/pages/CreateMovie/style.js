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

            overflow: auto;

            margin-top: 25px;
            padding-left: 16px;

            background-color: ${({theme})=>theme.COLORS.BLACK};
            border-radius: 8px;
            height: 85px;
        }
    }

    >.ButtonsDelAndSave{
        display: flex;
        gap: 100px;
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

    @media (max-width: 670px){
        >Section{
            display: flex;
            flex-direction: column;
            align-items: center;
            
            margin-top: -10px;
        
            >.Tags{
                display: flex;
                flex-direction: column;

                padding: 5px 0;
                
                height: 250px;
                width: 250px;
            }
        }

        >.ButtonsDelAndSave{
            margin: 10px;
            gap: 100px;
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
        gap: 20px;
    }

    .wrapperSeries{
        display: flex;
        justify-content: space-between;

        >div{
            width: 50%;
        }
    }

    >TextArea, Input{
        border-radius: 10px;
    }

    @media (max-width: 670px){
        padding: 40px 10px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 300px;

    position: absolute;
    top: 150px;
    right: 80px;


    >label{
        display: flex;
        justify-content: center;
    }

    >label input{
        margin-right: 5px;
        width: 20px;
        height: 20px;
        background-color: ${({theme})=>theme.COLORS.PINK_100};
        color: ${({theme})=>theme.COLORS.GRAY_500};
    }
    
    >input:hover{
        background: none;
    }

    @media (max-width: 670px){
        right: -30px;
    }
`;