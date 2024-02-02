import React, { useState, useEffect } from 'react';
import Busca from '../../components/Search';
import { Container, ContainerCourses, SubTitle } from './style';
import HeaderPage from '../../components/Header';
import CourseMini from '../../components/Thumbnail/Courses';
import FooterMenu from '../../components/Footer';
import HamburguerMenu from '../../components/Menu';

export default function Courses() {
  const aulasData = [
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },
    { title: 'React Native', subtitle: 'HTML/CSS I, ReactJs, React Native...', color: '#A5DEA9' },


  ];
  return (
    <Container>
      <HeaderPage role={'instrutor'} page={'Course'} />
      <Busca />
      <SubTitle>Todos os Cursos</SubTitle>
      <ContainerCourses>
        {aulasData.map((data, index) => (
          <CourseMini key={index} title={data.title} subtitle={data.subtitle} color={data.color} />
        ))}
      </ContainerCourses>
      <FooterMenu num={2} />
    </Container>

  );
}