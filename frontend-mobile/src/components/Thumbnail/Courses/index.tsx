import { Container, ImageContainer, SubTitle, Title} from './style';
import { useNavigation } from '@react-navigation/native';

export default function CourseMini({title, subtitle, color}) {
    const navigation = useNavigation();
    const containerStyle = {
        backgroundColor: color,
      };
 
    return (
        <Container style={containerStyle} onPress={() => navigation.navigate('Lessons')}>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <ImageContainer></ImageContainer>
        </Container>
    );
}

