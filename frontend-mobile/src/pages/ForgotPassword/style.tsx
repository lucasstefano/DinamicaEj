import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;  
    background-color: ${global.colors.BackgroundBlack};
`;

export const Title = styled.Text`
    font-size: 36px;
    font-weight: 500;
    color:${global.colors.White};
    align-self: flex-start;
    margin-left: 20px ;
`;

export const InputContainer = styled.View`
    gap: 22px;
    width: 95%;
    margin: 22px;
`;

export const Input = styled.TextInput`
    height: 69px;
    padding: 22px 34px;
    border-radius: 25px;
    font-size: 20px;
    font-weight: 300;
    color: ${global.colors.White};
    background-color: ${global.colors.InputColorActive};
`;


export const SubTitle = styled.Text`
    color:${global.colors.Grey}; 
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
`;

export const EnterButton = styled.Pressable`
    width: 226px;
    height: 75px;
    margin-top: 30px;
    margin-bottom: 124px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${global.colors.LightBlue};
`;

export const EnterText = styled.Text`
    color:${global.colors.BackgroundBlack}; 
    font-size: 20px;
    font-weight: 700;
`;

export const ButtonText = styled.Text`
    color: ${global.colors.White}; 
    text-align: center;
`;