import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    height: 100%;
    align-items: center;
    background-color: ${global.colors.BackgroundBlack};
`;

export const HeaderContainer = styled.View`
    width: 100%;
    margin-top: 44px;
`;

export const TopContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 20px;
`;

export const GreetingText = styled.Text`
    color: ${global.colors.White};
    font-size: 32px;
    font-weight: 600;
`;

export const NameText = styled.Text`
    color: ${global.colors.Green};
`;

export const UserContainer = styled.View`
    width: 39px;
    height: 39px;
    border-radius: 100px;
    background-color: ${global.colors.White};
`;

export const MessageText = styled.Text`
    font-size: 42px;
    font-weight: 400;
    color: ${global.colors.White};
    margin: 0px 0px 27px 20px;
`;

export const LessonsContainer = styled.View`
    margin: 24px 0px 100px 0px;
    gap: 24px;
`;

export const FilterContainer = styled.View`
    margin-top: 26px;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
`;

export const ActiveFilterButton = styled.Pressable`
    align-items: center;
    justify-content: center;
    width: 121px;
    height: 38px;
    background-color: ${global.colors.Green};
    border-radius: 100px;
`;

export const InactiveFilterButton = styled.Pressable`
    align-items: center;
    justify-content: center;
    width: 121px;
    height: 38px;
    background-color: ${global.colors.Black};
    border-radius: 100px;
`;

export const FilterText = styled.Text`
    color: ${global.colors.White};
    font-size: 16px;
    font-weight: 500;
`;

export const ContainerLesson= styled.View`
    gap: 12px;
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: row;   
    flex-wrap: wrap;
    margin: 20px 20px 100px 20px;
    
`;