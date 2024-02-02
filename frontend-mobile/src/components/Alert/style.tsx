import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
  width: 100vw;
  height: 92px;
  flex-direction: row;
  align-items: center;
  background-color: ${global.colors.BackgroundBlack};
  margin-bottom: 1px;
`;

export const PicContainer = styled.View`
  width: 60px;
  height: 60px;
  margin-left: 20px;
  border-radius: 100%;
  background-color: ${global.colors.White};
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const UpperTextContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 10px 0px 10px ;
  padding-right: 2px;
  gap: 5px;
`;

export const DownTextContainer = styled.View`
  margin: 0px 10px 0px 10px ;

`;
export const Text = styled.Text`
  color: ${global.colors.White};
  font-size: 16px;
  font-weight: 500;
`;

export const BoldText = styled.Text`
  color: ${global.colors.White};
  font-size: 16px;
  font-weight: 700;
`;
