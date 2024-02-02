import React from 'react';
import { AddButton, AddText, Container, Edittext, Icon, Title, edittext } from './style';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { EditText } from '../../pages/Perfil/style';
import HamburguerMenu from '../Menu';

interface HeaderPageProps {
  title: string;
  role: string;
}

export default function HeaderPage({ role, page }) {
  const navigation = useNavigation();

  const renderAddBotao = () => {
    if (role == 'instrutor') {
      if (page == 'Course') {
        return (
          <Pressable onPress={() => navigation.navigate('CreateCourse')}>
          <AddButton source={require('../../../assets/Header/icon-add.svg')} />
          </Pressable>
        );
      }
      if (page == 'Lesson') {
        return (
          <Pressable onPress={() => navigation.navigate('CreateLesson')}>
          <AddButton source={require('../../../assets/Header/icon-add.svg')} />
          </Pressable>
        );
      }
    }

    if (role === 'edit') {
      return (
        <Pressable onPress={() => navigation.navigate('EditPerfil')}> 
        <Edittext>Editar</Edittext>
        </Pressable>
      );
    }
    return null; // Se Cargo For Aluno, não vai Renderizar o Botão
  };

  return (
    <Container>
      
      <Pressable onPress={() => navigation.goBack()}>
        <Icon source={require('../../../assets/Header/icon-Voltar.svg')} />
      </Pressable>


      {renderAddBotao()}

    </Container>
  );
}

