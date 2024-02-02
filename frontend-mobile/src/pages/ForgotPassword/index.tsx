import React, { useState } from 'react';
import { Container,  InputContainer, Input, EnterButton, EnterText, Title } from './style';
import { useNavigation } from '@react-navigation/native';
import HeaderPage from '../../components/Header';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handlePressCadastrar = () => {
    // Check if any of the required fields are empty
    if ( !email) {
      alert('Todos os campos são obrigatórios. Por favor, preencha todos os campos.');
      return;
    }


    navigation.navigate('Login');
  };
  

  return (
    <Container>
      <HeaderPage title={' '} role={'aluno'} />
      <Title>Esqueci a Senha</Title>

      <InputContainer>
        <Input placeholder='Entre com seu E-mail' onChangeText={(text) => setEmail(text)} />
        </InputContainer>


      <EnterButton onPress={handlePressCadastrar}>
        <EnterText>Redefinir</EnterText>
      </EnterButton>

      
    </Container>
  );
}
