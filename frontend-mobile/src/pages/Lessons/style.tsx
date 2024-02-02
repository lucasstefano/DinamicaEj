import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;
    background-color: #0A0B0C;
    
`;
export const AulasContainer = styled.View`
    margin: 24px 0px 100px 0px;
    gap:24px;

`;

export const ContainerLesson= styled.View`
    gap: 12px;
    display: flex;
    flex-direction: row;
    align-items: flex-start; /* Align items to the bottom */
    justify-content: flex-start; /* Justify content to the right */
    flex-wrap: wrap;
    margin: 20px 20px 100px 20px;
    
`;