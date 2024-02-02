import styled from 'styled-components';
import { global } from '../../../globalStyle';

export const ThumbnailLesson = styled.a`
    position: relative;
    height: 200px;
    min-width: 300px;
    width: 36vw;
    background: #27856A;
    display: flex;
    align-items: center;
    border-radius: 10px;
    text-decoration: none;
`;

export const ImgContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 211px;
    height: 110px;
    background: rgba(255, 255, 255, 0.2);  
    border-top-left-radius:93px;
    border-bottom-right-radius: 8px;
`;

export const TextContainer = styled.div`
    display: flex;
    height: 200px;
    margin: 25px 16px 13px 13px;
    flex-direction: column;
`;

export const TitleText = styled.a`
    font-family: ${global.fonts.dmsans};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.1px;
    font-size: 36px;
    color: ${global.colors.White};
`;

export const SubTitleText = styled.a`
    font-family: ${global.fonts.dmsans};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.1px;
    font-size: 16px;
    color: ${global.colors.White};
`;
