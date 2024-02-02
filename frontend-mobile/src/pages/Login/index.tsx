import { Pressable } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, EntrarBotão, EntrarTexto, EsqueciSenhaTexto, Input, InputContainer, LogoImagem, NovaContaTexto, NovaContaTextoAzul, Titulo, ErrorText } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigation = useNavigation();

  const registeredEmail = "example@gmail.com"; 
  const registeredPassword = "password123"; 

  const onSubmit = (data:any) => {
    const enteredEmail = data.email;
    const enteredPassword = data.password;


    if (enteredEmail === registeredEmail && enteredPassword === registeredPassword) {

      navigation.navigate('Home');
    } else {

      alert('Email or password is incorrect');
    }
  };

  return (
    <Container>
      <LogoImagem source={require("../../../assets/Logo/Logo-Classroom.svg")} />
      <Titulo>Login</Titulo>
      <InputContainer>
        <Controller
          control={control}
          render={({ field }) => (
            <>
              <Input
                placeholder='Example@gmail.com'
                onChangeText={(text) => setValue('email', text)}
              />
            
            </>
          )}
          name="email"
          rules={{ required: 'E-mail é obrigatório' }}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <>
              <Input
                placeholder='Senha'
                onChangeText={(text) => setValue('password', text)}
                secureTextEntry
              />
             
            </>
          )}
          name="password"
          rules={{ required: 'Senha é obrigatória' }}
        />
      </InputContainer>

      <EntrarBotão onPress={handleSubmit(onSubmit)}>
        <EntrarTexto>Entrar</EntrarTexto>
      </EntrarBotão>

      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <EsqueciSenhaTexto>Esqueci Minha Senha</EsqueciSenhaTexto>
      </Pressable>

      <NovaContaTexto>
        Não tem uma Conta?
        <Pressable onPress={() => navigation.navigate('Register')}>
          <NovaContaTextoAzul> Cadastre-se </NovaContaTextoAzul>
        </Pressable>
      </NovaContaTexto>

    </Container>
  );
}
