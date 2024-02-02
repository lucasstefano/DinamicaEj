import React from 'react';
import { Pressable } from 'react-native';
import Busca from '../../components/Search';
import {
  Container,
  HeaderContainer,
  TopContainer,
  GreetingText,
  NameText,
  UserContainer,
  MessageText,
  ContainerLesson,

} from './style';

import { useNavigation } from '@react-navigation/native';
import FooterMenu from '../../components/Footer';
import LessonMini from '../../components/Thumbnail/Lessons';

export default function Home() {
  const navigation = useNavigation();
  const username = "Lucas";
  const aulasData = [
    { text: 'Aula de React Native', author: 'Lucas Stefano', color: '#A5DEA9', curso: 'frontend' },
    { text: 'Aula de Figma I', author: 'Lucas Stefano', color: '#F0D07E', curso: 'design' },
    { text: 'Aula de Model', author: 'Lucas Stefano', color: '#FB8864', curso: 'backend' },
    { text: 'Aula de ReactJS ', author: 'Lucas Stefano', color: '#60A5D7', curso: 'frontend' },
    { text: 'Aula de ReactJS ', author: 'Lucas Stefano', color: '#60A5D7', curso: 'frontend' },
    { text: 'Aula de ReactJS ', author: 'Lucas Stefano', color: '#60A5D7', curso: 'frontend' },
  ];

  return (
    <Container>
      <HeaderContainer>
        <TopContainer>
          <GreetingText>Olá! <NameText>{username},</NameText></GreetingText>
          <Pressable onPress={() => navigation.navigate('Perfil')}>
            <UserContainer></UserContainer>
          </Pressable>
        </TopContainer>
        <MessageText>Vamos Aprender Novas Coisas!</MessageText>
      </HeaderContainer>
      <Busca />
      <ContainerLesson> 
        {aulasData.slice(0,5).map((data, index) => (
          <LessonMini key={index} text={data.text} author={data.author} color={data.color} />
        ))}
      </ContainerLesson>

      <FooterMenu num={1}/>

    </Container>
  );
}
