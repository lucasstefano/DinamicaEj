import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;
    background-color: ${global.colors.BackgroundBlack}; 
`;

export const ContainerCourses = styled.View`
    gap: 12px;
    display: flex;
    flex-direction: row;
    align-items: flex-start; 
    justify-content: flex-start; 
    flex-wrap: wrap;
    margin: 20px 20px 100px 20px;
`;

export const SubTitle = styled.Text`
    align-self: flex-start;
    margin: 20px 20px 0px 20px;
    font-size: 28px;
    font-weight: 400;
    //font-family: "Roboto Condensed"; 
    color: ${global.colors.White};
`;
