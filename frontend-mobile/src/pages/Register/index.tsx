import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Header from '../../components/Header';
import {
    Container,
    Title,
    InputContainer,
    Input,
    SelectionContainer,
    SubTitle,
    SelectionButton,
    SelectedButton,
    UnselectedButton,
    SelectionText,
    RegisterButton,
    RegisterText,
    NewAccountText,
    NewAccountBlueText,
} from './style';
import { useNavigation } from '@react-navigation/native';
import { ContainerHorizontal } from '../../styles/StylesBasicos';

export default function Register() {
    const navigation = useNavigation();
    const [isStudent, setIsStudent] = useState(true);
    const [isInstructor, setIsInstructor] = useState(false);
    const [TermsOfService, setTermsOfService] = useState(false);
    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const handlePress = () => {
        setIsStudent(true);
        setIsInstructor(false);
    };

    const handlePressInstructor = () => {
        setIsInstructor(true);
        setIsStudent(false);
    };
    const agreeToTerms = () => {
        setTermsOfService(!TermsOfService);
    };

    const name = watch('name');
    const password = watch('password');
    const confirmPassword = watch('confirmpassword');
    const email = watch('email');

    const onSubmit = (data) => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!email.includes('@') || !email.includes('.com')) {
            alert('Invalid email format');
            return;
        }

        if (name.length <= 3) {

            alert('Name must have more than 3 characters');
            return;
        }

        if (password.length <= 5) {
            alert('Password must have more than 5 characters');
            return;
        }

        console.log(data);

        navigation.navigate('Home');
    };



    return (
        <Container>
            <Header role={'aluno'} page={''} />
            <Title>Criar uma Conta</Title>
            <InputContainer>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <Input
                            placeholder='Nome'
                            autoCapitalize='words'
                            {...field}
                        />   
                    )}
                    name="name"
                    rules={{
                        required: 'Nome é obrigatório',
                        minLength: {
                            value: 4,
                            message: 'Nome deve ter mais que 3 caracteres',
                        },
                    }}
                />

                <Controller
                    control={control}
                    render={({ field }) => (
                        <Input
                            placeholder='E-mail'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            {...field}
                        />
                    )}
                    name="email"
                    rules={{
                        required: 'E-mail é obrigatório',
                        validate: (value) =>
                            value.includes('@') && value.includes('.com') ||
                            'Formato de e-mail inválido',
                    }}
                />
                <Controller
                    control={control}
                    render={({ field }) => (
                        <Input
                            placeholder='Senha'
                            secureTextEntry
                            {...field}
                        />
                    )}
                    name="password"
                    rules={{
                        required: 'Senha é obrigatório',
                        minLength: {
                            value: 6,
                            message: 'Senha deve ter mais que 5 caracteres',
                        },
                    }}
                />
                <Controller
                    control={control}
                    render={({ field }) => (
                        <Input
                            placeholder='Confirmar Senha'
                            secureTextEntry
                            {...field}
                        />
                    )}
                    name="confirmpassword"
                    rules={{
                        required: 'Senha não combinam',
                        validate: (value) => value === password || 'Senhas não coincidem',
                    }}
                />

            </InputContainer>

            <SelectionContainer>
                <SubTitle>Qual seu Cargo?</SubTitle>
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

                <ContainerHorizontal>
                    <SelectionButton onPress={agreeToTerms}>
                        {TermsOfService ? <SelectedButton /> : <UnselectedButton />}
                    </SelectionButton>
                    <SelectionText>Concordo com os Termos de Serviço</SelectionText>
                </ContainerHorizontal>
            </SelectionContainer>

            <RegisterButton onPress={handleSubmit(onSubmit)}>
                <RegisterText>Cadastre-se</RegisterText>
            </RegisterButton>

            <NewAccountText>
                Já Tem uma Conta?
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <NewAccountBlueText> Entre Agora </NewAccountBlueText>
                </Pressable>
            </NewAccountText>
        </Container>
    );
}
