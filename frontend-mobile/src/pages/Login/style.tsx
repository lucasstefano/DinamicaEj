import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;  
    background-color: ${global.colors.BackgroundBlack};
`;

export const LogoImagem = styled.Image`
    width: 323px;
    height: 48px;
    margin-bottom: 154px;
    margin-top: 193px;
`;

export const Titulo = styled.Text`
    font-size: 36px;
    font-weight: 500;
    color:${global.colors.White};
    align-self: flex-start;
    margin-left: 20px ;
`;


export const InputContainer = styled.View`
    gap:22px;
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


export const EntrarBotão = styled.Pressable`
    width: 226px;
    height: 75px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${global.colors.LightBlue};
`;

export const EntrarTexto = styled.Text`
    color: ${global.colors.BackgroundBlack}; 
    font-size: 20px;
    font-weight: 700;
`;

export const EsqueciSenhaTexto = styled.Text`
    color: ${global.colors.LightBlue};
    margin-top: 13px;
    margin-bottom: 80px;
    font-size: 15px;
    font-weight: 400;
`;

export const NovaContaTexto = styled.Text`
    color: ${global.colors.LightGrey};
    margin-top: 13px;
    font-size: 15px;
    font-weight: 400;
`;

export const NovaContaTextoAzul = styled.Text`
    color: ${global.colors.LightBlue};
    margin-top: 13px;
    font-size: 15px;
    font-weight: 400;
`;