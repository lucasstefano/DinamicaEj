import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Container = styled.TouchableOpacity`
flex-direction: column;
  width: 189px;
  height: 216px;
  border-radius: 10px;
  background-color: ${global.colors.Blue};
  padding: 11px 18px;
`;

export const Title = styled.Text`
    align-self: flex-start;
    color: ${global.colors.White};
    font-size: 40px;
    font-weight: 500;
`;

export const SubTitle = styled.Text`
    align-self: flex-start;
    font-size: 20px;
    color: ${global.colors.White};
    font-weight: 400;
`;

export const ImageContainer = styled.View`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 130px;
    background: rgba(255, 255, 255, 0.2);  
    border-top-left-radius:100px;
    border-bottom-right-radius: 8px;
`;
