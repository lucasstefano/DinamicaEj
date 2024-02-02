
import SideBar from "../../components/SideBar";
import { AddImg, AddImgText, ButtonStyle, ButtonText,  Input, InputContainer, RightScreen, ScreenDiv, SubTitle } from "./style";
import { BannerComponent } from "../../components/Banner";

export default function EditUser() {

  return (
    <ScreenDiv>
      <SideBar page={0} />
      <RightScreen>
      <BannerComponent title={'Editando Perfil'} subtitle={''} />
        <InputContainer>
          <Input maxLength={40} placeholder="Editar Nome" />
          <Input maxLength={40} placeholder="Editar E-mail" />
        </InputContainer>
        <SubTitle>Mudar Foto de Perfil</SubTitle>
        <AddImg>
          <AddImgText>+</AddImgText>
        </AddImg>
       
        <ButtonStyle href="User"><ButtonText>Confirmar</ButtonText></ButtonStyle>
      </RightScreen>



      </ScreenDiv>
  );
}