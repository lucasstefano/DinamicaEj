import React, { useState } from 'react';
import { Pressable } from 'react-native';
import Header from '../../components/Header';
import { Container, Title, InputContainer, Input, SelectionContainer, SubTitle, SelectionButton, SelectedButton, UnselectedButton, SelectionText, RegisterButton, RegisterText, ForgotPasswordText, NewAccountText, NewAccountBlueText, RoleContainer, NewPicContainer, NewPicContainerText } from './style';
import { useNavigation } from '@react-navigation/native';
import { ContainerHorizontal } from '../../styles/StylesBasicos';

export default function EditPerfil() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isStudent, setIsStudent] = useState(true);
    const [isInstructor, setIsInstructor] = useState(false);
    const [TermsOfService, setTermsOfService] = useState(false);

    const handlePress = () => {
        setIsStudent(true);
        setIsInstructor(false);
    };

    const handlePressInstructor = () => {
        setIsInstructor(true);
        setIsStudent(false);
    };

    
   

    return (
        <Container>
            <Header role={'aluno'} page={''} />
            <Title>Editar sua Conta</Title>
            <InputContainer>
                <Input placeholder='Novo Nome' onChangeText={(text) => setName(text)} />
                <Input placeholder='Novo Email' onChangeText={(text) => setEmail(text)} />
            </InputContainer>
            <SubTitle>Mudar Foto</SubTitle>
            <Pressable style={{ alignSelf: 'flex-start' }}>
                <NewPicContainer>
                    <NewPicContainerText>+</NewPicContainerText>
                </NewPicContainer>
            </Pressable>
            <SelectionContainer>
                <SubTitle>Mudar Cargo:</SubTitle>
                <ContainerHorizontal>
                    <SelectionButton onPress={handlePress}>
                        {isStudent ? <SelectedButton /> : <UnselectedButton />}
                    </SelectionButton>
                    <SelectionText>Sou Aluno</SelectionText>
                    <SelectionButton onPress={handlePressInstructor}>
                        {isInstructor ? <SelectedButton /> : <UnselectedButton />}
                    </SelectionButton>
                    <SelectionText>Sou Instrutor</SelectionText>
                </ContainerHorizontal>
            </SelectionContainer>
            <RegisterButton>
                <RegisterText>Confirmar</RegisterText>
            </RegisterButton>


        </Container>
    );
}
