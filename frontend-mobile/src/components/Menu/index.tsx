import { BoldText, ButtonText, CloseContainer, Container, CourseButton, CoursesContainer, DownTextContainer, Favs, LogoContainer, LogoImage, MenuContainer, PicContainer, Text, TextContainer, UpperTextContainer, } from './style';


export default function HamburguerMenu() {

    const aulasData = [
        { text: 'Aula de React Native', author: 'Lucas Stefano', color: '#A5DEA9', curso: 'frontend' },
        { text: 'Aula de Figma I', author: 'Lucas Stefano', color: '#F0D07E', curso: 'design' },
        { text: 'Aula de Model', author: 'Lucas Stefano', color: '#FB8864', curso: 'backend' },
        { text: 'Aula de ReactJS ', author: 'Lucas Stefano', color: '#60A5D7', curso: 'frontend' },
        { text: 'Aula de ReactJS ', author: 'Lucas Stefano', color: '#60A5D7', curso: 'frontend' },
        { text: 'Aula de ReactJS ', author: 'Lucas Stefano', color: '#60A5D7', curso: 'frontend' },
      ];
    
    return (
        <Container>
            <MenuContainer> 
            <LogoContainer>
                <LogoImage source={require("../../../assets/Logo/Logo-Classroom.svg")} />
            </LogoContainer>

            <CoursesContainer>
                {aulasData.map((data, index) => (
                    <CourseButton key={index}>
                       <Favs style={{ backgroundColor: data.color }}/>
                        <ButtonText>{data.text}</ButtonText>
                    </CourseButton>
                ))}
            </CoursesContainer>
            </MenuContainer>
            <CloseContainer></CloseContainer>
        </Container>
       
    );
}

