import styled from 'styled-components';

export const Container = styled.section`
    margin: 0 120px;

    >h2{
        color: ${({theme})=>theme.COLORS.GRAY_500};
        font-size: 20px;
        font-weight: 400;
    }
`;