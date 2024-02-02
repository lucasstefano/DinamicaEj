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
    color: ${global.colors.White};
    font-family: ${global.fonts.roboto};
    font-size: 30px;
    font-weight: 400;
    margin-top: 10px;
    padding-left: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 70vw;
  height: 49px;
  border: none;
  border-radius: 25px;
  padding: 15px;
  background-color: ${global.colors.Grey};
  font-family: ${global.fonts.roboto};
  font-size: 20px;
  margin-left: 20px;
  color: ${global.colors.DarkWhite};

&::placeholder { 
    color: ${global.colors.DarkWhite};
    font-family: ${global.fonts.roboto};
    font-weight: 200;
    font-size: 20px;
  }

&:focus {
    outline: none;
    border: 1px solid ${global.colors.Blue}; 
}
`;

export const InputDescription = styled.textarea`
    width: 70vw;
    height: 200px;
    border: none;
    border-radius: 15px;
    padding: 10px;
    resize: none;
    font-family: ${global.fonts.roboto};
    font-size: 20px;
    margin: 10px 0px 0px 20px;
    color: ${global.colors.DarkWhite};
    background-color: ${global.colors.Grey};

  &::placeholder {
    color: ${global.colors.DarkWhite};
    font-family: ${global.fonts.roboto};
    font-weight: 200;
    font-size: 20px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${global.colors.Blue}; /* Add a border color when focused */
  }
`;

export const ColorsContainer = styled.div`
    display:flex;
    align-self: flex-start;
    margin: 13px 20px 0px 20px ;
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
  background:${global.colors.LightBlue};
`;

export const ButtonText = styled.text`
  color: ${global.colors.BackgroundBlack};
  font-family: ${global.fonts.dmsans};
  font-size: 20px;
  font-weight: 700;

`;

export const AddButtonContainer = styled.div`
  display:flex;
  flex-direction: row;
  margin: 10px 0px 20px 0px;
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  margin-left: 20px;
  border-radius: 100px;
  background:${global.colors.Grey};
`;

export const IconAdd = styled.img`
  width: 28px;
  height: 28px;
`;

export const FileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 12px;
  margin: 0px 20px ;
`;
export const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};