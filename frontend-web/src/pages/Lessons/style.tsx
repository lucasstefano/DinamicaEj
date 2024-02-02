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
    align-self: center;
    display:flex;
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0px 30px 20px;
    
`;
export const CreateLesson = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid ${global.colors.White};
    
`;
export const CreateLessonText = styled.text`
    font-size: 20px;
    color: ${global.colors.White};
    font-family: ${global.fonts.roboto};
`;
