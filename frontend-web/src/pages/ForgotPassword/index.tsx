import { ButtonStyle, ButtonText, FormArea, FormDiv, Input, InputContainer, InputStyle, LogoHeader, LogoImg, PageTitle, RegisterContainer, RegisterText, ScreenDiv } from "./style";
import Logo from '../../assets/Login&Register/Logo-Classroom.svg'

export default function ForgotPassword() {
  return (
    <ScreenDiv>
      <LogoHeader>
        <LogoImg src={Logo} />
      </LogoHeader>
      <FormDiv>
        <FormArea>
          <PageTitle>Esqueci Minha Senha</PageTitle>
          <InputContainer>
          
            <InputStyle>
              <Input placeholder="Entre com seu E-Mail"/>
            </InputStyle>
    
          </InputContainer>
          <ButtonStyle><ButtonText>Confirmar</ButtonText></ButtonStyle>
        
        </FormArea>
      </FormDiv>

    </ScreenDiv>
  );
}