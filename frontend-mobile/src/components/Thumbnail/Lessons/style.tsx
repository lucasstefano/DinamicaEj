import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Container = styled.TouchableOpacity`
    position: relative;
    width: 100%;
    height: 200px;
    background-color: ${global.colors.GreyDark};
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    align-content:flex-end;
`;

export const Title = styled.Text`
    align-self: flex-start;
    color: ${global.colors.White};
    margin: 20px 70px 0px 20px;
    font-size: 36px;
    font-weight: 500;
    line-height: normal;
`;
export const Author = styled.Text`
    align-self: flex-start;
    margin: 00px 70px 0px 20px;
    color: ${global.colors.White};
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
`;
export const ImageContainer = styled.View`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 130px;
    background: rgba(255, 255, 255, 0.2);  
    border-top-left-radius:93px;
    border-bottom-right-radius: 8px;
`;

