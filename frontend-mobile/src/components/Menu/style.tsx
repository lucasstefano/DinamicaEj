import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
  position: absolute;
  flex-direction: column;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100%;
  background-color: ${global.colors.Black};
`;

export const MenuContainer = styled.View`
  position: absolute;
  flex-direction: column;
  left: 0;
  z-index: -1;
  width: 70vw;
  height: 100%;
  background-color: ${global.colors.Black};
`;

export const CloseContainer = styled.View`
  position: absolute;
  flex-direction: column;
  right: 0;
  z-index: 1;
  width: 30vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.144);
`;
export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 15%;
`;

export const LogoImage = styled.Image`
  width:50vw;
  height: 30px;
`;


export const CoursesContainer = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 2px;
  border-color: ${global.colors.Grey};
`;

export const CourseButton = styled.Pressable`
align-items: center;
padding: 15px 20px;
flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color: ${global.colors.White};
`;

export const Favs = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: ${global.colors.Yellow};
`;
