import styled from 'styled-components';

export const Container = styled.div`
    >.ButtonTurnBack{
        display: flex;
        align-items: center;
        gap: 10px;

        padding-top: 150px;
        margin-left: 120px;

        svg, a{
            color: ${({theme})=>theme.COLORS.PINK_500};
        }
    }

    @media (max-width: 670px){
        .ButtonTurnBack{
            margin-top: -130px;
            margin-left: 10px;
        }
    }
`;

export const Section = styled.section`
    margin: 25px 120px;
    display: flex;
    flex-direction: column;

    >.wrapper_stars{
        display: flex;
        gap: 20px;
        align-items: center;

        svg{
            color: ${({theme})=>theme.COLORS.PINK_500};
        }
    }

   >div:nth-child(2){
        margin-top: 25px;

    .userImg{
        width: 16px;
        height: 16px;

        border-radius: 50%;
    }
   }

   >.wrapper_span{
        display: flex;
        gap: 15px;

    div{
        display: flex;
        gap: 8px;
    }
    svg{
        color: ${({theme})=>theme.COLORS.PINK_500};
    }
    }

    .tags_spans{
        margin: 30px 0; 

        display: flex;
        gap: 20px;

    span{
        border-radius: 8px;
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};

        color: ${({theme})=>theme.COLORS.GRAY_500};
        padding: 10px;
    }
   }
   >.wrapper_text{
       display: flex;
       flex-direction: column;
       gap: 25px;

       text-align: justify;
   }

   @media (max-width: 670px){
        margin: 20px;

        .wrapper_text{
            background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};
            padding: 10px;
            height: 580px;
            overflow: auto;
        }
   }
`;