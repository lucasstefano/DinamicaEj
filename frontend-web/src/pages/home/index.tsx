import { BannerHome } from "../../components/Banner";
import { HeaderPage } from "../../components/Header";
import SideBar from "../../components/SideBar";
import MiniCourses from "../../components/Thumbnail/Courses";
import MiniLessons from "../../components/Thumbnail/Lessons";
import { CoursesContainer, LessonsContainer, RetanguloVermelho, RightScreen, ScreenDiv, SubTitle  } from "./style";

export default function Home() {
  
  const coursesData = [
  { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
  { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
  { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },
  { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...', color: '#A5DEA9' },

];
const lessonsData = [
  { title: 'Aula de React Native', subtitle: 'Lucas Stefano', color: '#A5DEA9' },
  { title: 'Aula de React Native', subtitle: 'Lucas Stefano', color: '#A5DEA9' },
  { title: 'Aula de React Native', subtitle: 'Lucas Stefano', color: '#A5DEA9' },
  { title: 'Aula de React Native', subtitle: 'Lucas Stefano', color: '#A5DEA9' },
];
 
 
  return (
    <ScreenDiv>
      <SideBar page={1}/>
      <RightScreen>
        <HeaderPage/>
        <BannerHome title={'Lucas'}/>
        <SubTitle>Cursos</SubTitle>
        <CoursesContainer>
        {coursesData.slice(0,4).map((data, index) => (
          <MiniCourses key={index} title={data.title} subtitle={data.subtitle} color={data.color} />
        ))}
        </CoursesContainer>
        <SubTitle>Aulas</SubTitle>
        <LessonsContainer>
        {lessonsData.slice(0,6).map((data, index) => (
          <MiniLessons key={index} title={data.title} subtitle={data.subtitle} color={data.color} />
        ))}

        </LessonsContainer>


      </RightScreen>
    </ScreenDiv>
  );
}