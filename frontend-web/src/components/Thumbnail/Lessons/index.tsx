import { ImgContainer, SubTitleText, TextContainer, ThumbnailLesson, TitleText } from "./style";

interface MiniLessonsProps {
  title: string;
  subtitle: string;
  color: string;
}

export default function MiniLessons({ title, subtitle, color }: MiniLessonsProps) {
  const containerStyle = {
    backgroundColor: color,
  }; 

  return (
    <ThumbnailLesson style={containerStyle} href='Watch'>
      <TextContainer>
        <TitleText>{title}</TitleText>
        <SubTitleText>{subtitle}</SubTitleText>
      </TextContainer>
      <ImgContainer></ImgContainer>
    </ThumbnailLesson>
  );
}