import styled, { css }from 'styled-components';
import { global } from '../../globalStyle';

export const ScreenDiv = styled.div`
`;

export const FormDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

`;

export const FormArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 584px;
    border-radius: 25px;

`;

export const PageTitle = styled.text`
    align-self: flex-start;
    margin: 42px 20px 26px 20px;
    color: ${global.colors.White};
    font-family: ${global.fonts.roboto};
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const InputStyle = styled.div`
    display: flex; 
    align-items: center; 
    width: 40vw;
    height: 69px;
    padding-right: 20px;
    border-radius: 25px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    background: ${global.colors.InputColorDeactive};

`;

export const Input = styled.input`
    width: 200vw;
    height: 69px;
    border: none;
    background-color: transparent;
    font-family: ${global.fonts.roboto};
    font-size: 20px;
    margin-left: 25px;
    color: ${global.colors.DarkWhite};

&::placeholder {

    color: ${global.colors.DarkWhite};
    font-family: ${global.fonts.roboto};
    font-weight: 200;
    font-size: 20px;
  }
&:focus {
    outline: none;
  }

`;

export const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-self: center;
    justify-content: center;
    margin: 26px 0px 0px 160px;
    width: 226px;
    height: 75px;
    border-radius: 100px;
    background:${global.colors.LightBlue};
`;

export const ButtonText = styled.text`
    color: ${global.colors.BackgroundBlack};
    font-family: ${global.fonts.dmsans};
    font-size: 20px;
    font-weight: 700;
`;

export const ForgotPassword = styled.a`
    margin-top: 13px;
    color:${global.colors.LightBlue};
    text-align: center;
    font-family: ${global.fonts.dmsans};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const RegisterContainer = styled.div`
    margin-top: 14px;
`;

export const RegisterText = styled.text`
    color: ${global.colors.LightGrey};
    font-family: ${global.fonts.dmsans};
    font-size: 20px;
    font-weight: 400;
`;

export const BlueRegisterText = styled.a`
    color: ${global.colors.LightBlue};
    font-family: ${global.fonts.dmsans};
    font-size: 20px;
    font-weight: 400;
`;

export const LogoHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${global.colors.LightGrey};
    height: 80px;
`;

export const LogoImg = styled.img`
    width: 483px;
    height: 41px;
`;

export const SelectionContainer = styled.div`
    align-self: flex-start;
    margin: 26px 0px 0px 20px;
    gap: 13px;
`;

export const SubTitle = styled.text`
    color: ${global.colors.LightGrey}; 
    font-size: 20px;
    font-weight: 500;

`;

export const SelectionText = styled.text`
    color: ${global.colors.LightGrey}; 
    font-size: 20px;
    font-weight: 300;
    align-items: flex-start;
    margin-right: 20px;
    margin-left: 8px;
`;

export const SelectionButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 14px;
    border-radius: 100px;
    border: 2px solid ${global.colors.LightGrey};
    background-color: ${global.colors.BackgroundBlack};
`;

export const SelectedButton = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background-color: ${global.colors.LightBlue};
`;

export const UnselectedButton = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background-color: ${global.colors.LightGrey};
`;

export const ContainerHorizontal = styled.div`
    display:flex;
    margin-top: 2px;
    align-items: center;
    flex-direction: row;
`;
export const MensagemErroContainer = styled.div` 
    display: flex;
    position: relative;
    flex-direction: column;
`;

export const MensagemErro = styled.p` 
    position: absolute;
    bottom: -38px;
    font-size: 16px;
    color: red;
    font-family: ${global.fonts.roboto};
    margin-right: 10px;
`;

export const MensagemErroCheckbox = styled.p` 
    font-size: 16px;
    color: red;
    font-family: ${global.fonts.roboto};
`;

export const TogglePasswordButton = styled.div`
    margin-right: 15px;
    width: 24px;
    height: 24px;
`
export const TogglePasswordIMG = styled.img`
    width: 24px;
    height: 24px;
`