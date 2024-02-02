import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 86px;
    border-top-left-radius: 44px;
    border-top-right-radius: 44px;
    gap: 15%;
    position: fixed;
    bottom: 0;
    background-color: ${global.colors.Black};
`;

export const Icon = styled.Pressable`
    width: 36px;
    height: 37px;
   
`;
export const HomeIcon = styled.Image`
    width: 36px;
    height: 37px;
   
`;
export const CategoriaIcon = styled.Image`
     width: 36px;
    height: 37px;
`;
export const AlertIcon = styled.Image`
    width: 36px;
    height: 37px;
`;
export const UserHomeIcon = styled.Image`
    width: 36px;
    height: 37px;
`;