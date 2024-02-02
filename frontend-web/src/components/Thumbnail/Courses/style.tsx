import styled from 'styled-components';
import { global } from '../../../globalStyle';


export const ThumbnailContainer = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 170px;
    width: 17vw;
    height: 211px;
    background: ${global.colors.Green};
    border-radius: 10px;
    text-decoration: none;
`;

export const ImgContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 112px;
    height: 112px;
    background: rgba(255, 255, 255, 0.2);  
    border-top-left-radius: 100px;
    border-bottom-right-radius: 10px;
`;

export const TitleText= styled.a`
    align-self: flex-start;
    margin: 10px 13px 6px 13px;
    font-family: ${global.fonts.dmsans};
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2.03px;
    color: ${global.colors.White};
`;

export const SubTitleText= styled.a`
    align-self: flex-start;
    margin: 0px 13px 0px 13px;
    font-family: ${global.fonts.dmsans};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${global.colors.White};
`;
