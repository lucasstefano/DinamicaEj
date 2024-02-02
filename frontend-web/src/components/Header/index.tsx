import { CreateLesson, CreateLessonText, SearchContainer, SearchIcon, SearchInput, TopHeader } from "./style";
import searchicon from "../../assets/Header/icon-search.svg"

export function HeaderPage() {
  return (
    <TopHeader>
      <SearchContainer>
        <SearchIcon src={searchicon} />
        <SearchInput placeholder="Buscar..."></SearchInput>
      </SearchContainer>
    </TopHeader>

  );
}

export function HeaderCourse() {
  return (
    <TopHeader>
      <SearchContainer>
        <SearchIcon src={searchicon} />
        <SearchInput placeholder="Buscar..."></SearchInput>
      </SearchContainer>
      <CreateLesson href="/CreateLesson"><CreateLessonText>CRIAR AULA</CreateLessonText></CreateLesson>
    </TopHeader>

  );
}