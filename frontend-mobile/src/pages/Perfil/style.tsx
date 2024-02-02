import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;
    background-color:${global.colors.BackgroundBlack};
`;

export const UserContainer = styled.View`
    align-items: center;
    width: 390px;
    height: 370px;
    border-radius: 25px;
    background-color: ${global.colors.Grey};
`;

export const ImageRoleContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 173px;
    height: 173px;
    margin-top: 20px;
    border-radius: 100px;
    border: 7px;
    border-color: ${global.colors.White};
 
`;

export const UserImageContainer = styled.View`
    width: 147px;
    height: 147px;
    border-radius: 100px;
    background-color: ${global.colors.White};
   
`;

export const UserRole = styled.Text`
    margin:12px 0px 16px 0px;
    color: ${global.colors.White};
    font-size: 24px;
    font-weight: 700;
`;


export const UserName = styled.Text`
    color: ${global.colors.White};
    font-size: 40px;
    font-weight: 700;
    margin-top: 15px;
   
`;


export const UserEmail = styled.Text`
    color:${global.colors.White};
    font-size: 24px;
    font-weight: 300;
`;

export const LogoutText = styled.Text`
    margin-top: 35px;
    color: ${global.colors.White};
    font-size: 20px;
    font-weight: 600;
`;

export const EditText = styled.Text`
    color: ${global.colors.White};
    font-size: 20px;
    font-weight: 600;
`;
export const Subtitle = styled.Text`
    align-self: flex-start;
    margin: 16px 20px;
    color: ${global.colors.White};
    font-size: 24px;
    font-weight: 700;
`;

export const LessonsContainer = styled.View`
    gap: 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 20px 100px 20px;
     
`;
export const ContainerCourses = styled.View`
    gap: 12px;
    display: flex;
    flex-direction: row;
    align-items: flex-start; 
    justify-content: flex-start; 
    flex-wrap: wrap;
    margin: 20px 20px 80px 20px;
`;