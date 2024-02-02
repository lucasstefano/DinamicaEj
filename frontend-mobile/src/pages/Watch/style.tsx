import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;
    background-color: ${global.colors.BackgroundBlack};
`;

export const VideoContainer = styled.View`
    height: 196px;
    width: 95%;
    border-radius: 25px;
    align-items: center;
    background-color: ${global.colors.Grey};
    margin: 16px 0px;
`;

export const OthersVideoContainer = styled.View`
   align-self: flex-start;
   flex-direction: row;
   margin-left: 20px;
   gap: 10px;
`;

export const OtherVideoContainer = styled.View`
    height: 40px;
    width: 40px;
    border-radius: 25px;
    align-items: center;
    background-color: ${global.colors.Grey};
    margin: 0px 0px 10px 0px;
`;

export const Title = styled.Text`
    color: ${global.colors.White};
    font-size: 48px;
    font-weight: 400;
    margin-left: 20px;
`;

export const Author = styled.Text`
    align-self: flex-start;
    color: ${global.colors.White};
    font-size: 16px;
    font-weight: 600;
    margin-left: 20px;
`;

export const Subtitle = styled.Text`
    align-self: flex-start;
    color: ${global.colors.White};
    font-size: 20px;
    font-weight: 600;
    margin-left: 20px;
`;

export const Description = styled.Text`
    align-self: flex-start;
    color: ${global.colors.White};
    font-size: 16px;
    font-weight: 400;
    margin: 2px 20px 12px 20px;
`;

export const FileContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 59px;
    gap: 12px;
    margin: 12px 20px;
    border-radius: 100px;
 
`;
