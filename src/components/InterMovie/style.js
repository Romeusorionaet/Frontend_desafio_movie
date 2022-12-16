import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 220px;

   margin-top: 50px;
   padding: 30px;
   border-radius: 15px;

   background-color: ${({theme})=>theme.COLORS.PINK_100};
 
   >a:hover{
    opacity: .9;
   }

   h2, p{
    color: ${({theme})=>theme.COLORS.WHITE_500};
   }

   >a p{
    width: 100%;
    height: 40px;

    overflow: hidden;
    text-align: justify;
   }

   >a .stars{
    margin: 8px 0;

     svg{
        color: ${({theme})=>theme.COLORS.PINK_500};
    }
   }
   >a .spans{
    margin: 30px 0; 

    display: flex;
    gap: 20px;

     span{
        padding: 10px;
        border-radius: 8px;
        
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};
        color: ${({theme})=>theme.COLORS.GRAY_500};
    }
   }
`;