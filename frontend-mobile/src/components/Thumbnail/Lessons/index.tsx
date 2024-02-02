import { Title, Container,  Author, ImageContainer,  } from './style';
import { useNavigation } from '@react-navigation/native';

export default function LessonMini({ text, author, color }) {
  const navigation = useNavigation();
  
  const containerStyle = {
    backgroundColor: color,
  };

  return (
    <Container style={containerStyle} onPress={() => navigation.navigate('Watch')} >
      
      <Title>{text}</Title>
      <Author>Por {author}</Author>
      <ImageContainer></ImageContainer>
     
    </Container>

  );
}

