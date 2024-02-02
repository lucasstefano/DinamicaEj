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
    margin-top: 20px;
    padding-left: 20px;
`;

export const CoursesContainer = styled.div`
    display:flex;
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0px 30px 20px;
`;

export const UserContainer = styled.div`
    height: 334px;
    display: flex;
    align-items: center;
    background: ${global.colors.Grey};
`;

export const UserPicContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
    border-radius: 100%;
    margin-left: 70px;
    border: 8px solid ${global.colors.White};
`;

export const UserPic = styled.img`
    width: 205px;
    height: 205px;
    border-radius: 100%;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`;

export const UserName= styled.text`
    font-size: 80px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.White};
    margin-right: 60px;

`;

export const UserEmail = styled.text`
    font-size: 20px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.White};
    margin-right: 60px;
`;

export const UserRole = styled.text`
    font-size: 30px;
    font-weight: 600;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.White};
    margin-right: 60px;
`;

export const EditIcon = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    margin: 50px;
    width: 30px;
    height: 30px;
`;

export const Fundo = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
`;
