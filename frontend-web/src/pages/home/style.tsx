import styled from 'styled-components';
import { global } from '../../globalStyle';

export const ScreenDiv = styled.div`
`;

export const RightScreen = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 22vw;
`;

export const VideoContainer = styled.div`
    display: flex;
    width: 563px;
    height: 334px;
    align-self: center;
    margin: 20px 0px 26px 20px;
    border-radius: 25px;
    background-color: ${global.colors.Grey};
`;

export const SubTitle = styled.text`
    color: ${global.colors.White};
    font-family: ${global.fonts.roboto};
    font-size: 30px;
    font-weight: 400;
    margin-top: 20px;
    padding-left: 20px;


`;
export const Description = styled.text`
    color: ${global.colors.DarkWhite};
    font-size: 16px;
    font-weight: 600;
`;

export const DescriptionContainer = styled.div`
    margin: 2px 0px 26px 20px;
    flex-direction: column;
    width: 70vw; 
`;



export const CoursesContainer = styled.div`
    display:flex;
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0px 30px 20px;

`;

export const LessonsContainer = styled.div`
    display:flex;
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0px 30px 20px;
    
`;
export const RetanguloVermelho = styled.div`
    width: 200px;
  height: 100px;
  background-color: red;
  margin-top: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
    
`;

export const ButtonAdd = styled.a`
    align-items: center;
    z-index: 1;
    justify-content: center;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    left: 20px;
    bottom: 10px;
    position: fixed;
    background-color: blue;
    color: white;
    font-size: 16px;
    width: 110px;
    height: 40px;
`
export const ColumnTitle = styled.div`
    width: 400px;
    height: 50px;
    border-radius: 20px;
    margin: 10px 0px;
    background-color: #f3f3f3;
`

export const ColumnStyle = styled.div`
    padding: 10px 0px;
    width: 400px;
    height: 70vh;
    border-radius: 20px;
    background-color: #c2c2c2;
`
export const ColumnContainer = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
`