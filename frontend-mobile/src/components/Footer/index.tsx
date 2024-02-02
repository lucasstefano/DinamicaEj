import { useNavigation } from '@react-navigation/native';
import {  AlertIcon, CategoriaIcon, Container, HomeIcon, Icon, UserHomeIcon, } from './style';

export default function FooterMenu({num}) {
  const navigation = useNavigation();
  return (
    <Container>

        <Icon onPress={() => navigation.navigate('Home')}>
        {num === 1 ? (
        <HomeIcon source={require('../../../assets/rodape/icon-home.svg')}/>) : ( 
        <HomeIcon source={require('../../../assets/rodape/desactive/icon-home.svg')} />
        )}
        </Icon>


        <Icon onPress={() => navigation.navigate('Courses')}>
        {num === 2 ? (
        <CategoriaIcon source={require('../../../assets/rodape/icon-courses.svg')}/>) : (
        <CategoriaIcon source={require('../../../assets/rodape/desactive/icon-courses.svg')}/>
        )} 
        </Icon>

        
        <Icon onPress={() => navigation.navigate('Perfil')}>
          {num === 4 ? (
        <UserHomeIcon source={require('../../../assets/rodape/icon-perfil.svg')}/>) : ( 
        <UserHomeIcon source={require('../../../assets/rodape/desactive/icon-perfil.svg')}/>)}
        </Icon>
    </Container>

  );
}

