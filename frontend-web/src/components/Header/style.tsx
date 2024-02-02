import styled from 'styled-components';
import { global } from '../../globalStyle';


export const TopHeader = styled.header`
    height: 9vh;
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 25px;
    background: ${global.colors.White};
`;

export const SearchIcon = styled.img`
    width: 26px;
    height: 26px;
    margin-left: 17px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    margin: 0px 17px 0px 17px;
    border-radius: 25px;
    background: transparent;
    border: none;
    color: ${global.colors.Black};
    font-size: 18px;
    font-weight: 400;

&::placeholder {
    outline: none;
    font-size: 18px;
    font-weight: 400;
    color: ${global.colors.Black};
}

&:focus {
    outline: none;
    color: ${global.colors.Black};
}

`;
export const CreateLesson = styled.a`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
right: 0;
width: 150px;
height: 38px;
border-radius: 25px;
margin-right: 20px;
border: 2px solid ${global.colors.White};
text-decoration: none;
&:hover {
    background: ${global.colors.DarkWhite};
}
`;

export const CreateLessonText = styled.text`
font-size: 20px;
color: ${global.colors.White};
font-family: ${global.fonts.roboto};
`;
