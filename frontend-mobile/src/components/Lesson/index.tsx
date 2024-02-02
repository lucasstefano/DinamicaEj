import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Container, IMGContainer, SubTitle, Title} from './style';

export default function Lesson({ text, subtext, color }) {
  const navigation = useNavigation();
  const containerStyle = {
    backgroundColor: color,
  };

  return (
    <Container onPress={() => navigation.navigate('Cursos', { titulo: text })}>
      <Title>{text}</Title>
      <SubTitle>{subtext}</SubTitle>
      <IMGContainer></IMGContainer>
    </Container>
  );
}
 