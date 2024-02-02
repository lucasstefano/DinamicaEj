import styled from 'styled-components/native';
import global from '../../globalStyles';

export const SearchBarStyle = styled.View`
position: relative;
align-items: center;
    flex-direction: row;
    width: 95%;
    height: 60px;
    border-radius: 25px;
    background-color: ${global.colors.White};
    color: ${global.colors.Black};
    font-size: 24px;
    font-weight: 300;

`;

export const SearchInput = styled.TextInput`
    width: 100%;
    height: 100%;
    color: ${global.colors.Black};
    font-size: 24px;
    font-weight: 300;
    outline-width: 0;
   
`;

export const SearchIcon = styled.Image`
    width: 29px;
    height: 29px;
    margin: 0px 15px 0px 20px;

`;
