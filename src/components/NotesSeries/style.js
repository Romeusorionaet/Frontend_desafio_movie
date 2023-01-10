import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 270px;
   
   margin-top: 50px;
   padding: 30px;
   border-radius: 15px;
   
   background-color: ${({theme})=>theme.COLORS.PINK_100};

  
   .wrapperSerie{
      display: flex;
      flex-direction: column;
   }

   >a:hover{
    opacity: .9;
   }

   h2, p, .wrapperSerie{
    color: ${({theme})=>theme.COLORS.WHITE_500};
   }

   >a p{
    width: 100%;
    height: 40px;

    margin-top: -20px;

    overflow: hidden;
    text-align: justify;
   }

   >a .stars-wrapper{
    margin: 8px 0 0 0;
    width: 100px;
    height: 50px;
    img{
      width: 100%;
      margin-top: -30px;
    }
     svg{
        color: ${({theme})=>theme.COLORS.PINK_500};
    }
   }

   >a .tags{
      margin-top: 20px;

    display: flex;
    gap: 20px;

     ul{
      list-style: none;
     }
     span{
        padding: 10px;
        border-radius: 8px;
        
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};
        color: ${({theme})=>theme.COLORS.GRAY_500};
    }
   }

`;