import { ImgContainer, SubTitleText, ThumbnailContainer, TitleText } from "./style";

interface MiniCoursesProps {
  title: string;
  subtitle: string;
  color: string;
}

export default function MiniCourses({title, subtitle, color}: MiniCoursesProps) {
  const containerStyle = {
    backgroundColor: color,
  }; 

  return (
      <ThumbnailContainer style={containerStyle} href="/Lessons">
        <TitleText>{title}</TitleText>
        <SubTitleText>{subtitle}</SubTitleText>
        <ImgContainer></ImgContainer>
      </ThumbnailContainer>
  );
}
