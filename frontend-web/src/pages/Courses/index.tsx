import { useEffect, useState } from "react";
import { HeaderPage } from "../../components/Header";
import SideBar from "../../components/SideBar";
import MiniCourses from "../../components/Thumbnail/Courses";
import { CoursesContainer, RightScreen, ScreenDiv, SubTitle } from "./style";
import userService from "../../services/userService";

interface CoursesInfo {
  title: string;
  subtitle: string;
  color: string;
}



export default function Courses() {
  const coursesData = [
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },

  ];


  const [data, setData] = useState<CoursesInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userService.getCourses();
        let dados = response?.data.courses;
        setData(dados);
        console.log(dados);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
  
    fetchData();
  }, []);
 


  return (
    <ScreenDiv>
      <SideBar page={2} />
      <RightScreen>
        <HeaderPage />
        <SubTitle>Todos os Cursos</SubTitle>
        {/* All Courses -- Todos Cursos */}
        <CoursesContainer>{data.map((data, index) => (
          <MiniCourses key={index} title={data.title} subtitle={data.subtitle} color={data.color} />
        ))}
        </CoursesContainer>
      </RightScreen>
    </ScreenDiv>
  );
}