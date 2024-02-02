import React, { useState } from 'react';
import MenuRodape from '../../../components/Footer';
import { ActiveColor, ColorsContainer, Container, CreateBotton, CreateText, Input, InputContainer, SubTitle } from './style';
import HeaderPage from '../../../components/Header';

export default function CreateCourse() {
  const colors = ['#C1FF97', '#FB8864', '#FFF48E', '#FFBFAB', '#60A5D7'];
  const [SelectedColor, setselectedColor] = useState(null);

  const handleColorClick = (colors) => {
    setselectedColor(colors);
  };

  return (
    <Container>
      <HeaderPage title={' '} role={''}/>
      <InputContainer>
        <Input placeholder='Nome do Curso' />
        <Input placeholder='Descrição' />
      </InputContainer>

      <SubTitle>Cores</SubTitle>
      <ColorsContainer>
        {colors.map((colors, index) => (
          <ActiveColor
            key={index}
            style={{
              backgroundColor: colors,
              border: SelectedColor === colors ? '4px solid #ffffff' : 'none', 
            }}
            onClick={() => handleColorClick(colors)}
          ></ActiveColor>
        ))}
      </ColorsContainer>
      
      <CreateBotton><CreateText>Criar</CreateText></CreateBotton>
      <MenuRodape />
    </Container>
  );
}