import styled from 'styled-components';
import { global } from '../../globalStyle';

export const BannerStyle = styled.header`
    min-height: 12vh; /* Set a minimum height */
    box-sizing: border-box;
    background: ${global.colors.BackgroundBlack};
    display: flex;
    padding: 20px;
    flex-direction: column;
`;

export const BannerText = styled.text`
    font-size: 60px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.White};
    margin-right: 60px;
`;
export const BannerAuthor = styled.text`
    font-size: 20px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.White};
    margin-right: 60px;
    margin-bottom: 10px;
`;
export const BannerMensage = styled.text`
    font-size: 26px;
    font-family: ${global.fonts.roboto};
    color: ${global.colors.White};
    margin-right: 60px;
    margin-bottom: 0px;
`;

export const CorBannerMensage = styled.text`
    color: ${global.colors.Green};
   
`;
