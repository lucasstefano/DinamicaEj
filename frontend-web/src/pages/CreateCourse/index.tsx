import React, { useState } from 'react';
import SideBar from "../../components/SideBar";
import { ActiveColor, ButtonStyle, ButtonText, ColorsContainer, Input, InputContainer, RightScreen, ScreenDiv, SubTitle } from "./style";
import { BannerComponent } from '../../components/Banner';

export default function CreateCourses() {
  const colors = ['#C1FF97', '#FB8864', '#FFF48E', '#FFBFAB', '#60A5D7'];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <ScreenDiv>
      <SideBar page={0} />
      <RightScreen>
        <BannerComponent title={'Criando Curso'} subtitle={''} />
        <InputContainer>
          <Input maxLength={40} placeholder="Nome do Curso" />
          <Input maxLength={40} placeholder="Descrição" />
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
        <ButtonStyle href='Courses'><ButtonText>Confirmar</ButtonText></ButtonStyle>
      </RightScreen>
    </ScreenDiv>
  );
}
