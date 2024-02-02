import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;
    background-color: ${global.colors.BackgroundBlack};
`;

export const InputContainer = styled.View`
    gap: 22px;
    width: 95%;
    margin: 22px;
`;

export const InputStyle = styled.TextInput`
    height: 69px;
    padding: 22px 34px;
    border-radius: 25px;
    font-size: 20px;
    font-weight: 300;
    color: ${global.colors.White};
    background-color: ${global.colors.Grey};
`;

export const DescriptionContainer = styled.View`
    gap: 0px;
`;

export const Description = styled.View`
    justify-content: center;
    padding-left: 16px;
    height: 47px;
    border-bottom-width: 1px; 
    border-bottom-color: #fff;
    background-color: ${global.colors.GreyDark};
`;

export const DescriptionText = styled.Text`
    font-size: 20px;
    color: ${global.colors.White};
    font-weight: 300;
`;

export const InputDescription = styled.TextInput`
    height: 228px;
    padding: 7px 19px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    font-size: 20px;
    font-weight: 300;
    color: ${global.colors.White};
    background-color: ${global.colors.Grey}; 
`;

export const SubTitle = styled.Text`
    align-self: flex-start;
    margin-left: 20px;
    color: ${global.colors.Grey}; 
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
`;

export const ColorsContainer = styled.View`
    align-self: flex-start;
    margin: 13px 20px 26px 20px ;
    flex-direction: row;
    gap: 13px;
`;

export const ActiveColor = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    border: 3px;
    border-color: ${global.colors.LightBlue};
    background-color: ${global.colors.White};
`;

export const Color = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background-color: ${global.colors.White};
`;

export const CreateButton = styled.Pressable`
    align-items: center;
    justify-content: center;
    width: 226px;
    height: 75px;
    border-radius: 100px;
    margin:20px 0px 110px 0px;
    background-color: ${global.colors.LightBlue};
`;

export const CreateText = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: ${global.colors.BackgroundBlack};
`;

export const LinksContainer = styled.View`
    align-self: flex-start;
    margin: 13px 20px;
    flex-direction: row;
    gap: 12;
`;
export const LinkButton = styled.Pressable`
    width: 55px;
    height: 55px;
    border-radius: 100px;
    background-color: ${global.colors.Grey};
`;

export const FileContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 59px;
    margin: 8px 0px;
    border-radius: 100px;
    background-color: ${global.colors.GreyDark};
`;

export const FileImageContainer = styled.View`
    width: 25%;
    height: 59px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    background-color: ${global.colors.Grey};
`;

export const FileText = styled.View`
    margin-left: 18px;
    color: ${global.colors.White};;
    font-size: 16px;
    font-weight: 500;
`;
export const FileSizeText = styled.View`
    margin-left: 18px;
    color: ${global.colors.White};;
    font-size: 15px;
    font-weight: 200;
`;
