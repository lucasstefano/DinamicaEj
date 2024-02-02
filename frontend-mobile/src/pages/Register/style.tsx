import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;  
    background-color:${global.colors.BackgroundBlack};
`;

export const Title = styled.Text`
    font-size: 36px;
    font-weight: 500;
    color: ${global.colors.White};
    align-self: flex-start;
    margin-left: 20px;
`;

export const InputContainer = styled.View`
    gap: 22px;
    width: 100%;
    margin: 22px;
`;

export const Input = styled.TextInput`
    height: 69px;
    margin: 0px 20px 0px 20px;
    padding: 22px 34px;
    border-radius: 25px;
    font-size: 20px;
    font-weight: 300;
    color: ${global.colors.White};
    background-color: ${global.colors.InputColorActive};
`;

export const SelectionContainer = styled.View`
    align-self: flex-start;
    margin-left: 20px;
    gap: 13px;
`;

export const SubTitle = styled.Text`
    color: ${global.colors.LightGrey}; 
    font-size: 20px;
    font-weight: 500;
`;

export const SelectionText = styled.Text`
    color: ${global.colors.LightGrey}; 
    font-size: 20px;
    font-weight: 300;
    align-items: flex-start;
    margin-right: 20px;
`;

export const SelectionButton = styled.Pressable`
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 14px;
    border-radius: 100px;
    border: 2px;
    border-color: ${global.colors.LightGrey};
    background-color: ${global.colors.BackgroundBlack};
`;

export const SelectedButton = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background-color: ${global.colors.LightBlue};
`;

export const UnselectedButton = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background-color: ${global.colors.LightGrey};
`;

export const RegisterButton = styled.Pressable`
    width: 226px;
    height: 75px;
    margin-top: 30px;
    margin-bottom: 124px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${global.colors.LightBlue};
`;

export const RegisterText = styled.Text`
    color: ${global.colors.BackgroundBlack}; 
    font-size: 20px;
    font-weight: 700;
`;


export const NewAccountText = styled.Text`
    color: ${global.colors.LightBlue};
    margin-top: 13px;
    font-size: 15px;
    font-weight: 400;
`;

export const NewAccountBlueText = styled.Text`
    color: ${global.colors.LightGrey};
    margin-top: 13px;
    font-size: 15px;
    font-weight: 400;
`;

export const StyledButton = styled.Pressable`
    background-color: ${global.colors.LightBlue};
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
`;

export const ButtonText = styled.Text`
    color: white;
    text-align: center;
`;


export const ErrorText =styled.Text`
font-size: 12px;
color: red;
`;