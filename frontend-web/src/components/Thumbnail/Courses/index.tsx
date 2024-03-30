import { DateText, ImgContainer, StatusText, SubTitleText, ThumbnailContainer, TitleText } from "./style";
import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';


interface MiniCoursesProps {
  title: string;
  subtitle: string;
  status: string;
  color: string;
  id: any;
  dragging: any;
  handleDragStart: any;
}

export default function MiniCourses({ title, subtitle, status, color, id, dragging, handleDragStart }: MiniCoursesProps) {
  const containerStyle = {
    backgroundColor: color,
  };

  return (
    <ThumbnailContainer id={id}
      draggable={!dragging || dragging === id}
      onDragStart={(e) => handleDragStart(e, id)}
      href="Info">
      <StatusText>{status}</StatusText>

      <TitleText>{title}</TitleText>
      <SubTitleText>{subtitle}</SubTitleText>
      <DateText>Data de Criação</DateText>
      <ImgContainer></ImgContainer>
    </ThumbnailContainer>
  );
}
