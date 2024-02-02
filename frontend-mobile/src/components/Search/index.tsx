import { SearchBarStyle, SearchIcon, SearchInput} from './style';

export default function Search() {

  return (
    <SearchBarStyle>
      <SearchIcon source={require("../../../assets/Search/icon-Busca.svg")}></SearchIcon>
    <SearchInput placeholder='Buscar...'></SearchInput>

  
    </SearchBarStyle>

  );
}

