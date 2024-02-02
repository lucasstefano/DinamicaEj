import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { BlueRegisterText, ButtonStyle, ButtonText, ForgotPassword, FormArea, FormDiv, Input, InputContainer, InputStyle, LogoHeader, LogoImg, MensagemErro, PageTitle, RegisterContainer, RegisterText, ScreenDiv, TogglePasswordButton, TogglePasswordIMG } from "./style";
import Logo from '../../assets/Login&Register/Logo-Classroom.svg'

export default function Login() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (data: any) => {
    const email = data.email;
    const password = data.password;

    if (
       email === location.state?.email &&
       password === location.state?.senha
    ) {
      setError(null);
      navigate('/home'); 
    } else {
      setError('Login Inválido');
    }
  };

  useEffect(() => {
    if (!location.state) {
      navigate('/Login');
    }
  }, [location.state, navigate]);

  return (
    <ScreenDiv>
      <LogoHeader>
        <LogoImg src={Logo} />
      </LogoHeader>
      <FormDiv>
        <FormArea>
          <PageTitle>Login</PageTitle>
          <form onSubmit={handleSubmit(handleLogin)}>
          <InputContainer>

            <InputStyle>
              <Input {...register('Email')} placeholder="E-mail" />
            </InputStyle>
            <InputStyle>
              <Input {...register('password')} placeholder="Senha" type={showPassword ? 'text' : 'password'}  />
              <TogglePasswordButton onClick={togglePasswordVisibility}>
                 
                </TogglePasswordButton>
            </InputStyle>
            </InputContainer>
            {error && <MensagemErro>{error}</MensagemErro>}
          <ButtonStyle type="submit" ><ButtonText>Entrar</ButtonText></ButtonStyle>
          
          </form>

          <ForgotPassword href='ForgotPassword'>Esqueci Minha Senha</ForgotPassword>
          <RegisterContainer>
            <RegisterText>Não tem uma Conta? <BlueRegisterText href='Register'>Cadastre-se</BlueRegisterText></RegisterText>
          </RegisterContainer>
        </FormArea>
      </FormDiv>

    </ScreenDiv>
  );
}