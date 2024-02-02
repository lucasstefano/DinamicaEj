import React, { useState } from 'react';
import { ContainerVertical } from '../../../styles/StylesBasicos';
import { Container, InputStyle, DescriptionContainer, InputContainer, Description, DescriptionText, InputDescription, LinksContainer, SubTitle, ColorsContainer, ActiveColor, LinkButton, FileContainer, FileImageContainer, FileText, FileSizeText, CreateText } from './style';
import HeaderPage from '../../../components/Header';
import { CreateBotton } from '../CreateCourse/style';
import FooterMenu from '../../../components/Footer';

export default function CreateLesson() {
  const colors = ['#C1FF97', '#FB8864', '#FFF48E', '#FFBFAB', '#60A5D7'];
  const archive = ["Arquivo ImportanteX.pdf", "Arquivo ImportanteX.pdf"];

  const [SelectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (colors) => {
    setSelectedColor(colors);
  };

  return (
    <Container>
      <HeaderPage title={"Criar Aula"} role={" "} />
      <InputContainer>
        <InputStyle placeholder='Nome da Aula' />
        <DescriptionContainer>
          <Description><DescriptionText>Descrição</DescriptionText></Description>
          <InputDescription multiline placeholder='Escreva sua Descrição...' />
        </DescriptionContainer>
      </InputContainer>

      <SubTitle>Cores</SubTitle>
      <ColorsContainer>
        {colors.map((colors, index) => (
          <ActiveColor
            key={index}
            style={{
              backgroundColor: colors,
              border: SelectedColor === colors ? '2px solid #00C9FF' : 'none',
            }}
            onClick={() => handleColorClick(colors)}
          ></ActiveColor>
        ))}
      </ColorsContainer>

      <SubTitle>Anexar</SubTitle>
      <LinksContainer>
        <LinkButton></LinkButton>
        <LinkButton></LinkButton>
      </LinksContainer>

      {archive.map((type, index) => (
        <FileContainer key={index}>
          <FileImageContainer></FileImageContainer>
          <ContainerVertical>
            <FileText>{type}</FileText>
            <FileSizeText>{type}</FileSizeText>
          </ContainerVertical>
        </FileContainer>
      ))}

      <CreateBotton><CreateText>Criar</CreateText></CreateBotton>
      <FooterMenu />
    </Container >
  );
}
