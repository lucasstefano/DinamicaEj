import styled from 'styled-components';
import { global } from '../../globalStyle';

export const ScreenDiv = styled.div`
`;

export const RightScreen = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 22vw;
`;

export const SubTitle = styled.text`
    color: ${global.colors.LightGrey};
    font-family: ${global.fonts.roboto};
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
    padding-left: 20px;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

export const Input = styled.input`
width: 72vw;
height: 49px;
border: none;
border-radius: 25px;
padding: 15px;
background-color: ${global.colors.Grey};
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

export const ColorsContainer = styled.div`
    display:flex;
    align-self: flex-start;
    margin: 13px 20px 26px 20px ;
    flex-direction: row;
    gap: 13px;
`;

export const ActiveColor = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    border: 3px;
    border-color: ${global.colors.Black};
    background-color: ${global.colors.White};
`;

export const Color = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background-color: ${global.colors.White};
`;

export const ButtonStyle = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
    width: 72vw;
    height: 75px;
    margin-left: 20px;
    border-radius: 100px;
    text-decoration: none;
    background:${global.colors.LightBlue};
`;


export const ButtonText = styled.text`
    color: ${global.colors.BackgroundBlack};
    font-family: ${global.fonts.dmsans};
    font-size: 20px;
    font-weight: 700;
`;

export const AddImg = styled.a`
    display: flex;
    align-items: center;
    margin: 10px 20px 0px 20px;
    border-radius: 100px;
    width: 60px;
    height: 60px;
    background: ${global.colors.Grey};
`;

export const AddImgText = styled.text`
    color: ${global.colors.White};
    margin-left: 16px;
    margin-bottom: 8px;
    font-size: 40px;
    font-weight: 300;
`;
