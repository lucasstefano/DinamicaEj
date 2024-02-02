import styled from 'styled-components';
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
height: 584px;
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
gap: 20px;
`;



export const InputStyle = styled.div`
display: flex; 
align-items: center; 
width: 532px;
height: 69px;
border-radius: 25px;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
background: ${global.colors.InputColorDeactive};

`;



export const Input = styled.input`
width: 532px;
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
    outline: none;}


`;

export const ButtonStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 26px;
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
margin-top: 94px;
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

