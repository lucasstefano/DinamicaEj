import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.TouchableOpacity`
    flex-direction: column;
    min-width: 154px;
    width: 48%;
    max-width: 389px;
    height: 208px;
    border-radius: 25px;
    background-color: #296aac;
    padding: 14px;
    position: relative;
    
`;


export const IMGContainer = styled.View`
    width: 174px;
    height: 151px;
    border-top-left-radius: 100px;
    border-bottom-right-radius: 25px;
    background-color: black;
`;

export const Title = styled.Text`
    color: #000;
    font-size: 40px;
    font-weight: 500;
    margin-right: 20px;
   
`;

export const SubTitle= styled.Text`
    color: ${global.colors.White};
    font-size: 20px;
    font-weight: 400;
    justify-self: flex-end;
    position: absolute;
    bottom: 12;
    margin-right: 40px;
`;