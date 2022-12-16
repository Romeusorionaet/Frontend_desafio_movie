import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew})=>isNew ? "transparent" : theme.COLORS.BACKGROUND_500};
    color: ${({theme})=>theme.COLORS.WHITE};

    border: ${({theme, isNew})=>isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
    border-radius: 10px;

    padding-right: 16px;

    >button{
        border: none;
        background: none;

        >svg{
            width: 25px;
            height: 25px;
        }
    }
    .button-delete{
        color: ${({theme})=>theme.COLORS.PINK_500};
    }
    .button-add{
        color: ${({theme})=>theme.COLORS.PINK_500};
    }
    >input{
        height: 56px;
        width: ${({isNew})=>isNew ? "180px" : "110px"};

        padding: 12px;

        color: ${({theme})=>theme.COLORS.WHITE};
        background: transparent;

        border: none;
        
        &::placeholder{
            color: ${({theme})=>theme.COLORS.GRAY_300};
        }
    }
`;