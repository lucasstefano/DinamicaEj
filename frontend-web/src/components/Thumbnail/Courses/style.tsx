import styled from 'styled-components';
import { global } from '../../../globalStyle';


export const ThumbnailContainer = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: move;
    width: 330px;
    height: 180px;
    background-color: #fafafa;
    border-radius: 5px;
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

export const StatusText= styled.a`
    align-self: flex-start;
    margin: 10px 13px 0px 13px;
    font-family: ${global.fonts.dmsans};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2.03px;
    color: ${global.colors.White};
    background-color: #ff0000;
    padding: 0px 10px;
    border-radius: 16px;
`;

export const TitleText= styled.a`
    align-self: flex-start;
    margin: 0px 13px 6px 13px;
    font-family: ${global.fonts.dmsans};
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2.03px;
    color: ${global.colors.Black};
`;

export const SubTitleText= styled.a`
    align-self: flex-start;
    margin: 0px 13px 0px 13px;
    font-family: ${global.fonts.dmsans};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${global.colors.Black};
`;
export const DateText= styled.a`
    justify-self: flex-end;
    margin: 0px 13px 0px 13px;
    font-family: ${global.fonts.dmsans};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${global.colors.Black};
`;
