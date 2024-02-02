import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;
    background-color: #0A0B0C;
`;

export const InputContainer = styled.View`
    gap:22px;
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
    background-color: ${global.colors.Grey};
`;

export const SubTitle = styled.Text`
    align-self:flex-start;
    margin-left: 20px;
    color:${global.colors.White}; 
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
`;

export const ColorsContainer = styled.View`
    align-self: flex-start;
    margin: 13px 20px 26px 20px ;
    flex-direction: row;
    gap: 13px;
`;

export const ActiveColor = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    border: 3px;
    border-color: ${global.colors.Black};
    background-color: ${global.colors.White};
`;

export const Color = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background-color: ${global.colors.White};
`;

export const CreateBotton = styled.Pressable`
    align-items: center;
    justify-content: center;
    width: 226px;
    height: 75px;
    border-radius: 100px;
    background-color: ${global.colors.LightBlue};
`;

export const CreateText = styled.Text`
    font-size: 20px;font-weight: 700;
    color: ${global.colors.BackgroundBlack};
`;