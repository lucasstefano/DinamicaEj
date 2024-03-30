import React, { useState } from 'react';
import { ButtonAdd, ColumnContainer, ColumnStyle, ColumnTitle, CoursesContainer, ScreenDiv } from './style';
import MiniCourses from '../../components/Thumbnail/Courses';
import TopBar from '../../components/topbar';
import Column from '../../components/column';
import DragAndDrop from '../../components/Kanban';

export default function Home() {  

  return (
    <ScreenDiv>
      <TopBar></TopBar>
      
      <DragAndDrop></DragAndDrop>
    </ScreenDiv>
  );
}
