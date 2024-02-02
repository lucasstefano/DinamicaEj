import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  BlueRegisterText,
  ButtonStyle,
  ButtonText,
  ContainerHorizontal,
  FormArea,
  FormDiv,
  Input,
  InputContainer,
  InputStyle,
  LogoHeader,
  LogoImg,
  MensagemErro,
  MensagemErroCheckbox,
  MensagemErroContainer,
  PageTitle,
  RegisterContainer,
  RegisterText,
  ScreenDiv,
  SelectionContainer,
  SelectionText,
  SubTitle,
} from "./style";
import Logo from '../../assets/Login&Register/Logo-Classroom.svg';

type FormData = {
  nome: string;
  email: string;
  password: string;
  confirmpassword: string;
  userRole: 'student' | 'instructor';
  agreeTerms: boolean;
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.password !== data.confirmpassword) {
      console.log('Passwords do not match');
      return;
    }

    console.log('Registered with:', data.nome, data.email, data.password);
    console.log('User Role:', data.userRole ? 'Student' : 'Instructor');
    console.log('Agreed to Terms:', data.agreeTerms);
    navigate('/', {
      state: {
        nome: data.nome, email: data.email, senha: data.password, isStudent: data.userRole,
        agreeTerms: data.agreeTerms,
      }
    });
  };

  return (
    <ScreenDiv>
      <LogoHeader>
        <LogoImg src={Logo} />
      </LogoHeader>
      <FormDiv>
        <FormArea>
          <PageTitle>Cadastros</PageTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>

              <MensagemErroContainer>
                <InputStyle>
                  <Input {...register('nome', { required: 'Nome é obrigatório', minLength: { value: 4, message: 'Deve ter mais que 3 caracteres' } })} placeholder="Nome" />
                </InputStyle>
                {errors.nome && <MensagemErro>{errors.nome.message}</MensagemErro>}
              </MensagemErroContainer>

              <MensagemErroContainer>
                <InputStyle>
                  <Input {...register('email', { required: 'Email é obrigatório', pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: 'Email não é válido' } })}
                    placeholder="Example@gmail.com" />
                </InputStyle>
                {errors.email && <MensagemErro>{errors.email.message}</MensagemErro>}
              </MensagemErroContainer>

              <MensagemErroContainer>
                <InputStyle>
                  <MensagemErroContainer> </MensagemErroContainer>
                  <Input {...register('password', { required: 'Senha é obrigatória', minLength: { value: 8, message: 'Senha deve ter mais que 8 caracteres' } })} placeholder="Senha" type={showPassword ? 'text' : 'password'} />
                </InputStyle>
                {errors.password && <MensagemErro>{errors.password.message}</MensagemErro>}
              </MensagemErroContainer>

              <MensagemErroContainer>
                <InputStyle>
                  <MensagemErroContainer> </MensagemErroContainer>
                  <Input {...register('confirmpassword', {
                    required: 'Confirmação de senha é obrigatória',
                    validate: value => value === watch('password') || 'Senhas não coincidem'
                  })} placeholder="Confirmar Senha" type={showConfirmPassword ? 'text' : 'password'} />
                 
                </InputStyle>
                {errors.confirmpassword && <MensagemErro>{errors.confirmpassword.message}</MensagemErro>}
              </MensagemErroContainer>
            </InputContainer>

            <SelectionContainer>
              <SubTitle>Qual seu Cargo?</SubTitle>

              <ContainerHorizontal>
                <input type="radio" {...register('userRole', { required: true })} value="student" />
                <SelectionText>Sou Aluno</SelectionText>
                <input type="radio" {...register('userRole', { required: true })} value="instructor" />
                <SelectionText>Sou Instrutor</SelectionText>
                {errors.userRole && <MensagemErroCheckbox>*</MensagemErroCheckbox>}
              </ContainerHorizontal>

              <ContainerHorizontal>
                <input type="checkbox"{...register('agreeTerms', { required: true })} />
                <SelectionText>Concordo com os Termos de Serviço</SelectionText>
                {errors.agreeTerms && <MensagemErroCheckbox>*</MensagemErroCheckbox>}
              </ContainerHorizontal>

            </SelectionContainer>

            <ButtonStyle type="submit"><ButtonText>Entrar</ButtonText></ButtonStyle>
          </form>

          <RegisterContainer>
            <RegisterText>Já tem uma Conta? <BlueRegisterText href='/'>Entre Agora</BlueRegisterText></RegisterText>
          </RegisterContainer>
        </FormArea>
      </FormDiv>

    </ScreenDiv>
  );
}