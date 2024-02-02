import Busca from '../../components/Search';
import MenuRodape from '../../components/Footer';
import {  Container, ContainerLesson } from './style';
import { useRoute } from '@react-navigation/native';
import HeaderPage from '../../components/Header';
import LessonMini from '../../components/Thumbnail/Lessons';

export default function Lessons() {
  const route = useRoute();
  const { title } = route.params || {};

  const aulasData = [
    { text: 'Aula de React Native', author: 'Lucas Stefano', color: '#A5DEA9' },
    { text: 'Aula de HTML/CSS I', author: 'Lucas Stefano', color: '#F0D07E' },
    { text: 'Aula de HTML/CSS II', author: 'Lucas Stefano', color: '#FB8864' },
    { text: 'Aula de Styled Components', author: 'Lucas Stefano', color: '#60A5D7' },

  ];
  

  return (
    <Container>
      <HeaderPage role={'instrutor'} page={'Lesson'} />
      <Busca />
      <ContainerLesson>
      {aulasData.map((data, index) => (
          <LessonMini key={index} text={data.text} author={data.author} color={data.color} />
        ))}
      </ContainerLesson>
      <MenuRodape num={0}/>
    </Container>

  );
}

