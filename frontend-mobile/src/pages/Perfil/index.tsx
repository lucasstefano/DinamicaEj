import { Container, ContainerCourses, ImageRoleContainer, LogoutText, Subtitle, UserContainer, UserEmail, UserImageContainer, UserName, UserRole, } from './style';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderPage from '../../components/Header';
import FooterMenu from '../../components/Footer';
import CourseMini from '../../components/Thumbnail/Courses';

export default function Perfil() {
  const aulasData = [
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
  ];
 
  const navigation = useNavigation();
  const userRoles = new Set(['Instrutor']);
  const Role = [
    { Instrutor: '#00C9FF' },
    { Aluno: '#3a4f55' }
  ];

  return (
    <Container>
      <HeaderPage role={'edit'} page={''} />
      <UserContainer>
        {Role.map((role, index) => {
          const roles = Object.keys(role)[0];
          return userRoles.has(roles) ? (
            <ImageRoleContainer key={index}>
              <UserImageContainer></UserImageContainer>
            </ImageRoleContainer>
          ) : null;
        })}

        <UserName>LucasStefano</UserName>
        <UserEmail>Lucasstefanof@gmail.com</UserEmail>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <LogoutText>Sair</LogoutText>
        </Pressable>
      </UserContainer>
      <Subtitle>Seus Cursos</Subtitle>
      <ContainerCourses>
      {aulasData.slice(0,2).map((data, index) => (
          <CourseMini key={index} title={data.title} subtitle={data.subtitle} color={data.color} />
        ))}
      </ContainerCourses>
      
      <FooterMenu num={4}/>

    </Container>
  );
}