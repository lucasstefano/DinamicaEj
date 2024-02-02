import { useEffect, useState } from "react";
import { BannerComponent } from "../../components/Banner";
import { HeaderCourse }from "../../components/Header";
import SideBar from "../../components/SideBar";
import MiniLessons from "../../components/Thumbnail/Lessons";
import { LessonsContainer, RightScreen, ScreenDiv } from "./style";
import userService from "../../services/userService";

interface LessonsInfo {
  title: string;
  subtitle: string;
  color: string;
}

export default function Lessons() {
  const lessonsData = [
    { title: 'Aula de React Native', subtitle: 'Lucas Stefano', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'Lucas Stefano', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'Lucas Stefano', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'Lucas Stefano', color: '#A5DEA9' },
  ];

  const [data, setData] = useState<LessonsInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userService.getLessonsID();
        let dados = response?.data.courses;
        setData(dados);
        console.log(dados);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
  
    fetchData();
  }, []);


  return (
    <ScreenDiv>
      <SideBar page={0} />
      <RightScreen>
        <HeaderCourse/>
        <BannerComponent title={' '} subtitle={' '} />
        <LessonsContainer>
          {data.map((data, index) => (
            <MiniLessons key={index} title={data.title} subtitle={data.subtitle} color={data.color} />
          ))}
        </LessonsContainer>
      </RightScreen>
    </ScreenDiv>
  );
}