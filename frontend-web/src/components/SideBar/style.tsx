import styled from 'styled-components';
import { global } from '../../globalStyle';

export const SideBarDiv = styled.section`
  height: 100vh;
  width: 22vw;
  position: fixed;
  background: ${global.colors.Black};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22vw;
  height: 98px;
`;

export const LogoIMG = styled.img`
  width: 22vw;
  height: 3vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  padding-bottom: 8px;
  gap: 8px;
  border-bottom: 1px solid ${global.colors.Grey};
`;

const ButtonMenuBase = styled.a`
  display: flex;
  align-items: center;
  width: 22vw;
  height: 60px;
  text-decoration: none;
`;

export const ButtonMenu = styled(ButtonMenuBase)`
  &:hover {
    background: ${global.colors.Grey};
  }
`;

export const ActiveButtonMenu = styled(ButtonMenuBase)`
  width: 21vw;
  margin-left: 7px;
  border-radius: 6px;
  background: ${global.colors.Grey};
`;


export const ButtonIconMenu = styled.img`
  width: 22px;
  height: 22px;
  margin: 0px 23px 0px 23px;
`;

export const ButtonTextMenu = styled.a`
  font-size: 1.7vw;
  font-weight: 400;
  color: ${global.colors.White};
  text-decoration: none;
  font-family: ${global.fonts.roboto};
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 65vh;
  gap: 8px;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: auto; /* Add vertical scrollbar */
`;

export const FavsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  gap: 8px;
  border-bottom: 1px solid ${global.colors.Grey};
`;

export const Favs = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 6px;
  margin: 0px 23px 0px 23px;
  background: ${global.colors.Pink};
`;

export const UserContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 22vw;
  height: 15%;
  border-top: 1px solid ${global.colors.Grey};
  background:  ${global.colors.Black};
  text-decoration: none;

`;

export const UserPicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  height: 4vw;
  border-radius: 100%;
  margin-left: 1vw;
  border: 0.2em solid ${global.colors.White};
`;

export const UserPic = styled.img`
width: 3.5vw;
height: 3.5vw;
background:  ${global.colors.White};
border-radius: 100px;

`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1vw;
`;

export const UserName= styled.a`
  color: ${global.colors.White};
  font-size: 1.5vw;
  font-weight:400;
  font-family: ${global.fonts.roboto};
`;

export const UserRole= styled.a`
  color: ${global.colors.White};
  font-size: 1.5vw;
  font-weight: 200;
  font-family: ${global.fonts.roboto};
`;

export const IconLogout = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1vw;
  height: 1vw;
  margin: 0 2vw 0 3.8vw;
  cursor: pointer;
`;
export const LogoutIMG = styled.img`
  width: 2.3vw;
  height: 2.3vw;
`;
