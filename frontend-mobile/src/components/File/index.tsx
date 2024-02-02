import { ContainerVertical } from '../../styles/StylesBasicos';
import { Container, ImageContainer, NameArchive, SizeArchive} from './style';

  export default function FileComponent({title, type}) {
 
  return (
    <Container>
        <ImageContainer></ImageContainer>
        <ContainerVertical> 
            <NameArchive>{title}</NameArchive>
            <SizeArchive>{type}</SizeArchive>
        </ContainerVertical>
     
    </Container>

  );
}

