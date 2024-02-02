import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    width: 90%;
    height: 59px;
    border-radius: 100px;
    background-color:${global.colors.GreyDark};
`;

export const ImageContainer = styled.View`
    width: 30%;
    height: 59px;
    border-top-left-radius: 100px; 
    border-bottom-left-radius: 100px; 
    margin-right: 18px;
    background-color:${global.colors.Grey};
`;
export const NameArchive = styled.Text`
    flex: 1;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 500;
    color:${global.colors.White};
`;
export const SizeArchive = styled.Text`
    font-size: 15px;
    font-weight: 200;
    color:${global.colors.White};
`;
