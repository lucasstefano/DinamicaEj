import styled from 'styled-components';
import { global } from '../../globalStyle';

export const ScreenDiv = styled.div`


`;
export const RightScreen = styled.section`
display: flex;
flex-direction: column;
margin-left: 22vw;
`;

export const AllVideoContainer = styled.div`
    display: flex;
    align-self: center;
   
`;
export const VideoContainer = styled.div`
    display: flex;
    width: 640px;
    height: 360px;
    align-self: center;
    margin: 20px 0px 26px 20px;
    border-radius: 25px;
    background-color: ${global.colors.Grey};
`;

export const OtherVideoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
`;

export const OtherVideo = styled.div`
    display: flex;
    width: 173px;
    height: 123px;
    align-self: center;
    margin: 20px 0px 26px 20px;
    border-radius: 25px;
    background-color: ${global.colors.Grey};
`;

export const SubTitle = styled.text`
    color: ${global.colors.White};
    font-family: ${global.fonts.roboto};
    font-size: 20px;
    font-weight: 600;
    padding-left: 20px;
    letter-spacing: 1px;

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
export const FileContainer = styled.div`
    display:flex;
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0px 30px 20px;


    
`;
