import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    flex-direction: row;
    height: 106px;
    width: 100%;
    align-items: center; 
    padding-left: 16px;  
    justify-content: space-between; 
    padding-right: 16px;   
    top: 0;
`;

export const Title = styled.Text`
   color: ${global.colors.White};
   font-size: 32px;
    font-weight: 200;
    margin: 0 auto;
    
`;


export const Edittext = styled.Text`
    color: ${global.colors.White};
    font-size: 20px;
    font-weight: 300;
`;

export const Icon = styled.Image`
    width: 11px;
    height: 21px;
`;
export const AddButton = styled.Image`
    width: 49px;
    height: 49px;
`;


export const AddText = styled.Text`
    color: ${global.colors.White};
    font-size: 36px;
    font-weight: 200;
`;
