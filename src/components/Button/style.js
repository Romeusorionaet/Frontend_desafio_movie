import styled from 'styled-components';

export const Container = styled.button`
    width: auto;
    height: 56px;

    background-color: ${({theme}) => theme.COLORS.PINK_500};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-weight: 500;

    border-radius: 10px;
    border: 0;

    padding: 0 16px;
    margin-top: 16px;

    &:disabled {
        opacity: 0.5;
    }
`;