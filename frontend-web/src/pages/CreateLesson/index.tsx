import React, { useState } from 'react';
import SideBar from "../../components/SideBar";
import { ActiveColor, AddButton, AddButtonContainer, ButtonStyle, ButtonText, ColorsContainer, FileContainer, IconAdd, Input, InputContainer, InputDescription, RightScreen, ScreenDiv, SubTitle } from "./style";
import { BannerComponent }from '../../components/Banner';

export default function CreateLesson() {
  const fileData = [
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...'},
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...'},
    { title: 'Aula de React Native', subtitle: 'HTML/CSSI, ReactJS, ReactNative...'},
  ];
  
  const colors = ['#C1FF97', '#FB8864', '#FFF48E', '#FFBFAB', '#60A5D7'];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };


  return (
    <ScreenDiv>
      <SideBar page={0} />

      <RightScreen>
      <BannerComponent title={'Criando Aula'} subtitle={''}/>
        <InputContainer>
          <Input maxLength={50} placeholder="Nome do Curso" />
          <Input  placeholder="Codigo do Vimeo"></Input>
          <InputDescription placeholder="Descrição" />
        </InputContainer>
        <SubTitle>Cores</SubTitle>

        <ColorsContainer>
          {colors.map((color, index) => (
            <ActiveColor
              key={index}
              style={{
                backgroundColor: color,
                border: selectedColor === color ? '2px solid #00aeff' : 'none',
              }}
              onClick={() => handleColorClick(color)}
            ></ActiveColor>
          ))}
        </ColorsContainer>
  
        <ButtonStyle><ButtonText>Confirmar</ButtonText></ButtonStyle>
      </RightScreen>
    </ScreenDiv>
  );
}
