import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import MiniCourses from "../../components/Thumbnail/Courses";
import { CoursesContainer, EditIcon, InfoContainer, RightScreen, ScreenDiv, SubTitle, UserContainer, UserEmail, UserName, UserPic, UserPicContainer, UserRole } from "./style";
import edit from "../../assets/User/icon-edit.svg";
import userbase from "../../assets/User/img-perfilbase.svg";

export default function User() {
  const [userPic, setUserPic] = useState(userbase);

  const coursesData = [
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
  ];

  return (
    <ScreenDiv>
      <SideBar page={0} />
      <RightScreen>
        <UserContainer >
          <UserPicContainer><UserPic src={userPic} /></UserPicContainer>
          <InfoContainer>
            <UserName>Lucas Stefano</UserName>
            <UserEmail>Lucasstefanof@gmail.com</UserEmail>
          </InfoContainer>
          <a href='EditUser'> </a>
          <EditIcon src={edit} />
        </UserContainer>
        <SubTitle>Seus Cursos</SubTitle>
        <CoursesContainer>
          {coursesData.map((data, index) => (
            <MiniCourses key={index} title={data.title} subtitle={data.subtitle} color={data.color} />
          ))}
        </CoursesContainer>
      </RightScreen>
    </ScreenDiv>
  );
}